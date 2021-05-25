import React, { Component} from 'react';
import styled from 'styled-components';
import withLogin from '../LoginHoc';
class Admin extends Component {
    
    constructor(props){
        super(props)
        this.state = {
        joindate: '',
        team: '',
        position:'',
        gidstore: window.localStorage, 
        }
    }
    _handleDate =(e) =>{
        this.setState({
            joindate: e.target.value
          })
    }

    _handleSelectTeam =(e) =>{
      this.setState({
        team: e.target.value
      })
}

    _handleSelectPosition =(e) =>{
      this.setState({
        position: e.target.value
      })
}


    _handleSetgid =(e) =>{
      this.setState({
        gid: e.target.value
      })
      console.log(this.state.gid);
}

    _handleSetgidstore =(gid) =>{
        localStorage.setItem(window.sessionStorage.getItem('name'),gid);
      console.log(this.state.gidstore);
      alert("gid 등록이 완료되었습니다.");

      
}

_Postinfo =(e) =>{
  var sendop = "AKswitch=0&"
  var sendid = "AKid="+window.sessionStorage.getItem('id')+"&"
  var sendname = "AKname="+window.sessionStorage.getItem('name')+"&"
  var sendjoindate = "AKjoindate="+this.state.joindate+"&"
  var sendteam = "AKteam="+this.state.team+"&"
  var sendposition = "AKposition="+this.state.position
  var str = "https://script.google.com/a/macros/aroundkorea.kr/s/AKfycbyLYSk5tAvcQD0h7rzoOUhc7rvNDn1-OuHVcEW1kh-Q/dev?"+sendop+sendid+sendname+sendjoindate+sendteam+sendposition
  window.open(str,'알림','width=300, height=200, menubar=no, location=no, status=no, toolbar=no, resizeable=0')
}  

_Postdelete =(e) =>{
  var sendop = "AKswitch=1&"
  var sendid = "AKid="+window.sessionStorage.getItem('id')
  var str = "https://script.google.com/a/macros/aroundkorea.kr/s/AKfycbyLYSk5tAvcQD0h7rzoOUhc7rvNDn1-OuHVcEW1kh-Q/dev?"+sendop+sendid
  window.open(str,'알림','width=300, height=300, menubar=no, location=no, status=no, toolbar=no, resizeable=0')
}  
    render() {
        return (
          <Content>
            <h2> 개인 페이지 입니다</h2>
            <div>
                <p><img
                    width="100px"
                    height="100px"
                    src={window.sessionStorage.getItem('imgUrl')}
                    alt=""/></p>
                <p>Google Id : {window.sessionStorage.getItem('id')}</p>
                <p>이 름 : {window.sessionStorage.getItem('name')}</p>
                <p>이메일 : {window.sessionStorage.getItem('email')}</p>
                <p>입사일 : <input type="date" onChange={this._handleDate}></input></p>
                <p>팀 : <select value={this.state.selectteam} onChange={this._handleSelectTeam}>
                  <option value="없음">선택</option>
                  <option value="기획">기획</option>
                  <option value="경지">경영지원</option>
                  <option value="영상">영상</option>
                  <option value="디자인">디자인</option>
                  <option value="SI">SI</option>
                  <option value="공간기획">공간기획</option>
                  <option value="교육">교육</option>
                </select>
                </p>

                <p>Position : <select value={this.state.selectposition} onChange={this._handleSelectPosition}>
                  <option value="없음">선택</option>
                  <option value="대표">대표</option>
                  <option value="부대표">부대표</option>
                  <option value="본부장">본부장</option>
                  <option value="팀장">팀장</option>
                  <option value="팀원">팀원</option>
                </select>
                </p>

                <hr/>
                <button onClick={this._Postinfo}>등 록</button>
                <button onClick={this._Postdelete}>퇴 사</button>
                <hr/>
                <p>"본인의 gid를 확인해주세요"</p>
                <input type="text" value={this.state.gid} onChange={this._handleSetgid}></input>
                <button onClick={()=> this._handleSetgidstore(this.state.gid)}>등 록</button>
            </div>
          </Content>
        );
      }
}

    
export default withLogin(Admin);


const Content = styled.div`
  margin: 0 auto;
  width: 1080px;
`
