
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import User from './bt_people_o.png';

function Info () {    
  var test="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQwWAfhgZpkE2ibqUlhO06xvQH5ZRxSLor66i79CdhkjUcxn-2CW3-QN0AiUXnfSIJiS8VUtIO9Etk/pubhtml?gid="+window.localStorage.getItem(window.sessionStorage.getItem('name'))+"&single=true&widget=true&headers=false&range=K1:K3";      
        return (
          <Content>
              <Infotitle>
                <div style={{fontSize:"30px", fontWeight:"bolder"}}> WHO ARE WE?</div>
              </Infotitle>
              <Infomain>
                  <p>
                    {window.sessionStorage.getItem('imgUrl') === null ? <img width="100px"
                    height="100px"
                    src={User} 
                    alt="User" style={{ borderRadius:"50%",marginTop:"40px",marginLeft:"150px"}}/> : <img width="100px"
                    height="100px"
                    src={window.sessionStorage.getItem('imgUrl')} 
                    alt="User" style={{ borderRadius:"50%",marginTop:"40px",marginLeft:"150px"}}/>} 
                   </p>
                <Infoname style={{ borderRadius:"20px",textAlign:"center",fontSize:"25px", fontWeight:"bolder", letterSpacing:"3px"}}>{window.sessionStorage.getItem('name')===null ? "AROUND":window.sessionStorage.getItem('name')}</Infoname>
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
          </Content>
        );
      }


    

export default Info;

const Content = styled.div`
  width: 400px;
  height: 566px;
`
const Infotitle = styled.div`
  width: 400px;
  height: 60px;
`
const Infomain = styled.div`
  width: 400px;
  height: 322px;
  background: #A6CDA7;
  margin-bottom:4px;
  border-radius: 40px;
`
const Infoname = styled.div`
  width: 125px;
  height: 25px;
  background: #F0A83E;
  margin-left: 130px;
  padding: 5px;
`
const Infomore = styled.div`
  width: 70px;
  height: 20px;
  background: #F0A83E;
  margin-right: 50px;
  float: right;
`
const Infotime = styled.div`
  width: 341.5px;
  height: 163px;
  background: #A6CDA7;
  border-radius: 30px;
  padding-left: 58.5px
`