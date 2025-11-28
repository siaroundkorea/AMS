import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const CAR_SIZE = 30;
const FLAG_SIZE = 20;
const FART_SIZE = 40;

const FartCarGame = () => {
  const [gameState, setGameState] = useState('start'); // start, playing, gameover, win
  const [player, setPlayer] = useState({ x: 100, y: 100, direction: 'right' });
  const [enemies, setEnemies] = useState([]);
  const [flags, setFlags] = useState([]);
  const [farts, setFarts] = useState([]);
  const [fuel, setFuel] = useState(100);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [keys, setKeys] = useState({});

  const gameLoopRef = useRef();
  const lastTimeRef = useRef(0);

  // 게임 초기화
  const initGame = useCallback(() => {
    const newFlags = [];
    for (let i = 0; i < 10; i++) {
      newFlags.push({
        id: i,
        x: Math.random() * (GAME_WIDTH - FLAG_SIZE - 100) + 50,
        y: Math.random() * (GAME_HEIGHT - FLAG_SIZE - 100) + 50,
        isSpecial: i === 0
      });
    }

    const newEnemies = [];
    const enemyCount = Math.min(level + 2, 8);
    for (let i = 0; i < enemyCount; i++) {
      newEnemies.push({
        id: i,
        x: GAME_WIDTH - 100 - (i * 50),
        y: GAME_HEIGHT - 100 - (i * 50),
        stunned: false,
        stunnedTime: 0
      });
    }

    setPlayer({ x: 100, y: 100, direction: 'right' });
    setFlags(newFlags);
    setEnemies(newEnemies);
    setFarts([]);
    setFuel(100);
    setGameState('playing');
  }, [level]);

  // 키보드 이벤트
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
      setKeys(prev => ({ ...prev, [e.code]: true }));
    };

    const handleKeyUp = (e) => {
      setKeys(prev => ({ ...prev, [e.code]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // 방구 발사
  const shootFart = useCallback(() => {
    if (fuel >= 5) {
      const fartX = player.direction === 'left' ? player.x + CAR_SIZE :
                    player.direction === 'right' ? player.x - FART_SIZE : player.x;
      const fartY = player.direction === 'up' ? player.y + CAR_SIZE :
                    player.direction === 'down' ? player.y - FART_SIZE : player.y;

      setFarts(prev => [...prev, {
        id: Date.now(),
        x: fartX,
        y: fartY,
        lifetime: 60
      }]);
      setFuel(prev => Math.max(0, prev - 5));
    }
  }, [fuel, player]);

  // 스페이스바로 방구 발사
  useEffect(() => {
    if (keys.Space && gameState === 'playing') {
      const now = Date.now();
      if (now - lastTimeRef.current > 300) {
        shootFart();
        lastTimeRef.current = now;
      }
    }
  }, [keys.Space, gameState, shootFart]);

  // 게임 루프
  useEffect(() => {
    if (gameState !== 'playing') return;

    const gameLoop = () => {
      // 플레이어 이동
      setPlayer(prev => {
        let newX = prev.x;
        let newY = prev.y;
        let newDir = prev.direction;
        const speed = 4;

        if (keys.ArrowUp) { newY -= speed; newDir = 'up'; }
        if (keys.ArrowDown) { newY += speed; newDir = 'down'; }
        if (keys.ArrowLeft) { newX -= speed; newDir = 'left'; }
        if (keys.ArrowRight) { newX += speed; newDir = 'right'; }

        newX = Math.max(0, Math.min(GAME_WIDTH - CAR_SIZE, newX));
        newY = Math.max(0, Math.min(GAME_HEIGHT - CAR_SIZE, newY));

        return { x: newX, y: newY, direction: newDir };
      });

      // 연료 소모
      setFuel(prev => Math.max(0, prev - 0.02));

      // 적 이동
      setEnemies(prev => prev.map(enemy => {
        if (enemy.stunned) {
          if (enemy.stunnedTime > 0) {
            return { ...enemy, stunnedTime: enemy.stunnedTime - 1 };
          }
          return { ...enemy, stunned: false, stunnedTime: 0 };
        }

        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const speed = 2.5;

        return {
          ...enemy,
          x: enemy.x + (dx / dist) * speed,
          y: enemy.y + (dy / dist) * speed
        };
      }));

      // 방구 업데이트 및 충돌 체크
      setFarts(prev => prev
        .map(fart => ({ ...fart, lifetime: fart.lifetime - 1 }))
        .filter(fart => fart.lifetime > 0)
      );

      // 방구-적 충돌
      setEnemies(prev => prev.map(enemy => {
        for (const fart of farts) {
          const dx = enemy.x - fart.x;
          const dy = enemy.y - fart.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < FART_SIZE + CAR_SIZE / 2) {
            return { ...enemy, stunned: true, stunnedTime: 120 };
          }
        }
        return enemy;
      }));

      // 깃발 수집
      setFlags(prev => {
        const remaining = prev.filter(flag => {
          const dx = player.x - flag.x;
          const dy = player.y - flag.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CAR_SIZE) {
            setScore(s => s + (flag.isSpecial ? 500 : 100 * (10 - prev.length + 1)));
            if (flag.isSpecial) {
              setFuel(f => Math.min(100, f + 20));
            }
            return false;
          }
          return true;
        });

        if (remaining.length === 0) {
          setGameState('win');
        }

        return remaining;
      });

      // 적과 충돌 체크
      for (const enemy of enemies) {
        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CAR_SIZE && !enemy.stunned) {
          setGameState('gameover');
          return;
        }
      }

      // 연료 고갈 체크
      if (fuel <= 0) {
        setGameState('gameover');
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameState, keys, player, enemies, farts, fuel]);

  // 다음 레벨
  const nextLevel = () => {
    setLevel(prev => prev + 1);
    initGame();
  };

  // 게임 재시작
  const restartGame = () => {
    setLevel(1);
    setScore(0);
    initGame();
  };

  return (
    <GameContainer>
      <Title>🚗 방구차 게임 (Rally-X) 💨</Title>

      {gameState === 'start' && (
        <StartScreen>
          <h2>방구차 게임</h2>
          <Instructions>
            <p>🎮 방향키: 이동</p>
            <p>⌨️ 스페이스바: 방구 발사</p>
            <p>🚩 깃발을 모두 모으세요!</p>
            <p>🚗 빨간 차를 피하세요!</p>
            <p>💨 방구로 적을 멈추세요!</p>
            <p>⛽ 연료를 주의하세요!</p>
          </Instructions>
          <StartButton onClick={initGame}>게임 시작</StartButton>
        </StartScreen>
      )}

      {gameState === 'playing' && (
        <>
          <GameInfo>
            <InfoItem>점수: {score}</InfoItem>
            <InfoItem>레벨: {level}</InfoItem>
            <InfoItem>깃발: {10 - flags.length}/10</InfoItem>
            <FuelBar>
              <FuelFill style={{ width: `${fuel}%` }} low={fuel < 30} />
            </FuelBar>
          </GameInfo>

          <GameArea>
            {/* 플레이어 차량 */}
            <PlayerCar style={{ left: player.x, top: player.y }} direction={player.direction}>
              🚙
            </PlayerCar>

            {/* 적 차량 */}
            {enemies.map(enemy => (
              <EnemyCar
                key={enemy.id}
                style={{ left: enemy.x, top: enemy.y }}
                stunned={enemy.stunned}
              >
                {enemy.stunned ? '💫' : '🚗'}
              </EnemyCar>
            ))}

            {/* 깃발 */}
            {flags.map(flag => (
              <Flag
                key={flag.id}
                style={{ left: flag.x, top: flag.y }}
                isSpecial={flag.isSpecial}
              >
                {flag.isSpecial ? '⭐' : '🚩'}
              </Flag>
            ))}

            {/* 방구 */}
            {farts.map(fart => (
              <Fart
                key={fart.id}
                style={{ left: fart.x, top: fart.y, opacity: fart.lifetime / 60 }}
              >
                💨
              </Fart>
            ))}
          </GameArea>

          {/* 미니맵 */}
          <MiniMap>
            <MiniMapDot
              style={{
                left: (player.x / GAME_WIDTH) * 100 + '%',
                top: (player.y / GAME_HEIGHT) * 100 + '%'
              }}
              color="#00f"
            />
            {enemies.map(enemy => (
              <MiniMapDot
                key={enemy.id}
                style={{
                  left: (enemy.x / GAME_WIDTH) * 100 + '%',
                  top: (enemy.y / GAME_HEIGHT) * 100 + '%'
                }}
                color="#f00"
              />
            ))}
            {flags.map(flag => (
              <MiniMapDot
                key={flag.id}
                style={{
                  left: (flag.x / GAME_WIDTH) * 100 + '%',
                  top: (flag.y / GAME_HEIGHT) * 100 + '%'
                }}
                color={flag.isSpecial ? '#ff0' : '#0f0'}
              />
            ))}
          </MiniMap>
        </>
      )}

      {gameState === 'gameover' && (
        <GameOverScreen>
          <h2>💥 게임 오버! 💥</h2>
          <p>점수: {score}</p>
          <StartButton onClick={restartGame}>다시 시작</StartButton>
        </GameOverScreen>
      )}

      {gameState === 'win' && (
        <WinScreen>
          <h2>🎉 클리어! 🎉</h2>
          <p>점수: {score}</p>
          <p>레벨 {level} 완료!</p>
          <StartButton onClick={nextLevel}>다음 레벨</StartButton>
        </WinScreen>
      )}
    </GameContainer>
  );
};

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #1a1a2e;
  min-height: 100vh;
  color: white;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #eee;
`;

const GameArea = styled.div`
  position: relative;
  width: ${GAME_WIDTH}px;
  height: ${GAME_HEIGHT}px;
  background: linear-gradient(135deg, #2d2d44 25%, #1a1a2e 25%, #1a1a2e 50%, #2d2d44 50%, #2d2d44 75%, #1a1a2e 75%);
  background-size: 40px 40px;
  border: 4px solid #4a4a6a;
  border-radius: 10px;
  overflow: hidden;
`;

const PlayerCar = styled.div`
  position: absolute;
  font-size: ${CAR_SIZE}px;
  transform: ${props => {
    switch(props.direction) {
      case 'up': return 'rotate(-90deg)';
      case 'down': return 'rotate(90deg)';
      case 'left': return 'scaleX(-1)';
      default: return 'none';
    }
  }};
  filter: hue-rotate(180deg);
  transition: transform 0.1s;
`;

const EnemyCar = styled.div`
  position: absolute;
  font-size: ${CAR_SIZE}px;
  filter: ${props => props.stunned ? 'grayscale(100%)' : 'hue-rotate(0deg)'};
  animation: ${props => props.stunned ? 'spin 0.5s linear infinite' : 'none'};

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const Flag = styled.div`
  position: absolute;
  font-size: ${FLAG_SIZE}px;
  animation: ${props => props.isSpecial ? 'pulse 0.5s ease-in-out infinite alternate' : 'none'};

  @keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.3); }
  }
`;

const Fart = styled.div`
  position: absolute;
  font-size: ${FART_SIZE}px;
  filter: hue-rotate(60deg);
`;

const GameInfo = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  align-items: center;
`;

const InfoItem = styled.span`
  font-size: 1.2rem;
  padding: 5px 15px;
  background: #333;
  border-radius: 5px;
`;

const FuelBar = styled.div`
  width: 200px;
  height: 20px;
  background: #333;
  border-radius: 10px;
  overflow: hidden;
`;

const FuelFill = styled.div`
  height: 100%;
  background: ${props => props.low ? '#f44' : '#4f4'};
  transition: width 0.1s, background 0.3s;
`;

const MiniMap = styled.div`
  position: absolute;
  top: 80px;
  right: 20px;
  width: 150px;
  height: 112px;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #666;
  border-radius: 5px;
`;

const MiniMapDot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  background: ${props => props.color};
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const StartScreen = styled.div`
  text-align: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const Instructions = styled.div`
  text-align: left;
  margin: 20px auto;
  max-width: 300px;

  p {
    margin: 10px 0;
    font-size: 1.1rem;
  }
`;

const StartButton = styled.button`
  padding: 15px 40px;
  font-size: 1.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background: #45a049;
  }
`;

const GameOverScreen = styled(StartScreen)`
  h2 {
    color: #f44;
  }
`;

const WinScreen = styled(StartScreen)`
  h2 {
    color: #4f4;
  }
`;

export default FartCarGame;
