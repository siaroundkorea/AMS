
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import User from './bt_people_o.png';
import profile from './mt_profle.png'
import bbook from './bt_b_book.png';
import obook from './bt_o_book.png';
import '../Button.css';

function Info () {    
  var test="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQwWAfhgZpkE2ibqUlhO06xvQH5ZRxSLor66i79CdhkjUcxn-2CW3-QN0AiUXnfSIJiS8VUtIO9Etk/pubhtml?gid="+window.localStorage.getItem(window.sessionStorage.getItem('name'))+"&single=true&widget=true&headers=false&range=K1:K3";      
  
  const onHandleClick=()=>{
    window.open("https://docs.google.com/spreadsheets/d/1peDjD1ddUgV5mfIZnTrHpMY7rQKcJ5IpLmswAQPm9cw/edit#gid="+window.localStorage.getItem(window.sessionStorage.getItem('name')))
  } 

  return (
          <Content>
              <Infotitle>
                <img src={profile} alt="WHO ARE WE?"></img>
              </Infotitle>
              <Infomain>
                  <p>
                    {window.sessionStorage.getItem('imgUrl') === null ? <img width="100px"
                    height="100px"
                    src={User} 
                    alt="User" style={{ borderRadius:"50%",marginTop:"40px",marginLeft:"110px"}}/> : <img width="100px"
                    height="100px"
                    src={window.sessionStorage.getItem('imgUrl')} 
                    alt="User" style={{ borderRadius:"50%",marginTop:"40px",marginLeft:"110px"}}/>} 
                   </p>
                <Infoname>
                  <div style={{marginTop:"4px",textAlign:"center",fontSize:"30px", fontWeight:"bolder", letterSpacing:"3px"}}>
                    {window.sessionStorage.getItem('name')===null ? "AROUND":window.sessionStorage.getItem('name')}
                  </div>
                  </Infoname>
                <br/>
                <div style={{textAlign:"center",fontSize:"20px", fontWeight:"bolder"}}>{window.sessionStorage.getItem('email')===null ? "AROUNDKOREA@Gmail.com":window.sessionStorage.getItem('email')}</div>
                <br/>
                <Infomore style={{ borderRadius:"10px",textAlign:"center",fontSize:"18px", fontWeight:"bolder"}}><Link to='/adminpage' style={{textDecoration:'none',color:'black'}}>+ more</Link></Infomore>
                </Infomain>  

                <Infotime>
                  <Iframe url= {test}
                    position="relative"
                    width= "283px" 
                    height="160px"
                    /> 
                </Infotime>

                <over><Infotimecheck onClick={onHandleClick}>
                  <img src={bbook} alt="Timecheck"></img><img src={obook} alt="Timecheck"></img>
                </Infotimecheck></over>
          </Content>
        );
      }


    

export default Info;

const Content = styled.div`
  width: 400px;
  height: 566px;
`
const Infotitle = styled.div`
  width: 184px;
  height: 26px;
`
const Infomain = styled.div`
  width: 320px;
  height: 320px;
  background: #ffffff;
  margin-bottom: 16px;
  border-radius: 40px;

`
const Infoname = styled.div`
  width: 140px;
  height: 40px;
  background: #F7CA50;
  margin-left: 85px;
  padding: 5px;
  border-radius:20px;
`
const Infomore = styled.div`
  width: 70px;
  height: 20px;
  background: #F7CA50;
  margin-right: 50px;
  float: right;
  &:hover {
    background-color: #F0A83C;
  }
`
const Infotime = styled.div`
  width: 305px;
  height: 160px;
  background: #ffffff;
  border-radius: 30px;
  padding-left: 15px;
  margin-bottom: 8px;
`
const Infotimecheck = styled.div`
  width: 320px;
  height: 38px;
  background: #ffffff;
  border-radius: 30px;
`