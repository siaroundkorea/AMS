import React, { Component } from 'react';
import styled from 'styled-components';
import Clip from './Part/Clip'
import Info from './Part/Info'
import Commute from './Part/Commute'
import SNS from './Others/SNS'
import News from './Others/News'
import Workspace from './Part/Workspace';
import ass from './bt_b_AAS.png';
import asstitle from './mt_aas.png';
import apptitle from './mt_app.png';
import calendartitle from './mt_calendar.png';
import mailtitle from './mt_mail.png';
import cliptitle from './mt_clip.png';
import img from './img_1.png';
import omail from './bt_mail_o.png';
import bmail from './bt_mail_b.png';
import Clock from './Part/Clock';
import Weather from './Part/Weather';
import './Button.css';


class Home extends Component {

  constructor(props) {
    super(props);
        this.state = {
          pageNum: "0",
        };
     }

  _onclickHandle=()=>{
    switch(this.state.pageNum){
      case "1":
          window.open('https://mail.google.com/mail');
          break;
          case "2":
              window.open('https://afact.kr');
              break;
              default:
                alert('존재하지 않는 페이지 입니다.');
                   break;
       }
  }

  render() {
      return (

        <Content>
          {/* ------------------------------------ PatrA ------------------------------------ */}
          <PartA>
            <PartAinfo>
              <Info/>
            </PartAinfo>

            <PartAcommute>
              <Commute></Commute>
            </PartAcommute>

            <PartAaas>
              <PartAaastitle><img src={asstitle} alt="asstitle"></img></PartAaastitle>
              <PartAaasButton><img src={ass} alt="asstitle"></img></PartAaasButton>
            </PartAaas>

            <PartAworkspace>
              <PartAworkspacetitle><img src={apptitle} alt="asstitle"></img></PartAworkspacetitle>
              <Workspace/>
            </PartAworkspace>
          </PartA>

          {/* ------------------------------------ PatrB ------------------------------------ */}
          <PartB>
            <PartBtitle>
              <div style={{fontSize:"60px", fontWeight:"bolder"}}> Today`s Schedule</div>
              <Clock></Clock>
              </PartBtitle>

              <PartBcalender>
                <PartBcalendertitle>
                  <img src={calendartitle} alt="calendartitle"></img>
                </PartBcalendertitle>
                  <PartBcalendermain>
                    <iframe  title ="calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FSeoul&amp;src=YXJvdW5ka29yZWEua3Jfc3NxZWcyNTQ2cWdpMHM1ZGNudm51Y2lsMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfbTUzNmc3ZW5ocjN2aGVyNnU2OHJpMzVuN2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3Jfa3Z0c2k5YnBsM2E4b3JhcGpnZWgzajMwMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y190YXBxcjNpa2g2bGpnNWZiaWQ5b2ozbzQ3OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=YXJvdW5ka29yZWEua3JfbTNrZXVvcGlkcTg3Yzc1ZWJhdDlpZTJ1ZDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfNnVxOGZhOWFybWZpZm1rNjBtaHQwZmQ3cDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfMmlkdjAwbGttaGk5cGdhZjNxOHJhZXYxMmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfZnRpMDByc2NzdnJyZXQxdmRhdDdrOHV2ODhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfbG83M3BhY2x1M2pyc3VuaDdjdHNnODg1dHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfamQ5dmtiMGFrcG83MzBobDBoazc1b2Z1Z2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=a28uc291dGhfa29yZWEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;color=%23D50000&amp;color=%23EF6C00&amp;color=%23F6BF26&amp;color=%2333B679&amp;color=%23039BE5&amp;color=%234285F4&amp;color=%23B39DDB&amp;color=%239E69AF&amp;color=%23616161&amp;color=%230B8043&amp;color=%23795548&amp;mode=WEEK&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showTz=0&amp;showDate=0&amp;showCalendars=0" style={{width:"880px", height:"662px"}}></iframe>
                  </PartBcalendermain>
              </PartBcalender>

              <PartBmail>
                <PartBmailtitle><img src={mailtitle} alt="mailtitle"></img></PartBmailtitle>
                <over><PartBmailmain onMouseOver={()=>this.setState({pageNum:"1"})} onClick={this._onclickHandle}>
                  <img src={bmail} width="880px" height="152px" alt="gmail"></img><img src={omail} width="880px" height="152px" alt="gmail"></img>
                </PartBmailmain></over>
          
              </PartBmail>
          </PartB>

          {/* ------------------------------------ PatrC ------------------------------------ */}
          <PartC>
            <PartCtitle>  <div style={{fontSize:"60px", fontWeight:"bolder"}}> Weather</div>
            <Weather></Weather>
            </PartCtitle>
            <PartCmain>
              <PartCmaintitle><img src={cliptitle} alt="cliptitle" ></img></PartCmaintitle>
              <PartCcontioner>
                <PartCclipboard>
                  <Clip></Clip>
                </PartCclipboard>
                <PartCimg>
                  <img src={img} alt="img"></img>
                </PartCimg>
              </PartCcontioner>
            </PartCmain>
          </PartC>

          {/* ------------------------------------ SNS ------------------------------------ */}
          <PartSNS>
            <SNS/>
          </PartSNS>     
          {/* ------------------------------------ News ------------------------------------ */}
          <PartNews>
            <PartNewscontionar><News/></PartNewscontionar>
            <PartGonews onMouseOver={()=>this.setState({pageNum:"2"})} onClick={this._onclickHandle}> 👉🏻 더 자세한 이야기 보러가기</PartGonews>
          </PartNews>
        </Content>
        

      );
    }
  }
  

export default Home;

const Content = styled.div`
  width: 1980px;
`
const PartA = styled.div`
    margin-top :30px;  
    padding : 40px;  
    background: #DCDCDC;
    float: left;
    width: 320px;
    height: 1120px;
    border-radius: 40px;
`

const PartAinfo = styled.div`
    float: left;
    width: 320x;
    height: 566px;
    margin-bottom :40px;
    
`
const PartAcommute = styled.div`
    float: left;
    width: 320px;
    height: 202px;
    margin-bottom :45px;
`
const PartAaas = styled.div`
    float: left;
    width: 400px;
    height: 106px;
    margin-bottom :45px;
`
const PartAaastitle = styled.div`
    float: left;
    width: 243px;
    height: 38px;
`
const PartAaasButton = styled.div`
    float: left;
    width: 320px;
    height: 68px;
    border-radius: 20px;
`
const PartAworkspace = styled.div`
    float: left;
    width: 320px;
    height: 129px;
    margin-bottom :40px;
`
const PartAworkspacetitle = styled.div`
    float: left;
    width: 320px;
    height: 38px;
    margin-bottom :12px;
`



const PartB = styled.div`
    margin-top :30px;
    margin-left: 90px; 
    margin-right: 90px; 
    float: left;
    width: 960px;
    height: 1200px;
`
const PartBtitle = styled.div` 
    background: #ffffff;
    color: #0082F9;
    width: 960px;
    height: 136px;
`
const PartBcalender = styled.div`
    padding: 40px; 
    width: 880px;
    height: 700px;
    background: #DCDCDC;
    border-radius: 40px;
    margin-bottom: 14px;
`
const PartBcalendertitle = styled.div` 
    width: 880px;
    height: 26px;
    margin-bottom: 12px;
`
const PartBcalendermain = styled.div` 
    width: 880px;
    height: 662px;
`
const PartBmail = styled.div` 
    width: 880px;
    height: 190px;
    padding: 40px;
    border-radius: 40px;
    background: #DCDCDC;
`
const PartBmailtitle = styled.div` 
    width: 880px;
    height: 26px;
    margin-bottom: 12px;
    color: #0082F9;
`
const PartBmailmain = styled.div` 
    background: #ffffff;
    width: 880px;
    height: 152px;
    text-align: center;
`


const PartC = styled.div`
    margin-top :30px;    
    float: left;
    width: 440px;
    height: 1200px;
    border-radius: 40px;
`
const PartCtitle = styled.div` 
    background: #ffffff;
    color: #0082F9;
    width: 440px;
    height: 136px;
    border-radius: 40px;   
`
const PartCmain = styled.div` 
    background: #DCDCDC;
    width: 360px;
    height: 984px;
    padding : 40px;
    border-radius: 40px;
`

const PartCmaintitle = styled.div` 
    width: 360px;
    height: 38px;
    margin-bottom: 12px;
`
const PartCcontioner = styled.div` 
    background: #ffffff;
    width: 360px;
    height: 934px;
    border-radius: 40px;
`
const PartCclipboard = styled.div` 
    background: #FFFFFF;
    width: 312px;
    height: 577px;
    padding: 24px;
    border-radius: 40px;
    max-width: 312px;
    max-height: 577px;
    overflow: auto;
`
const PartCimg = styled.div` 
    background: #FFFFFF;
    width: 360px;
    height: 289px;
    padding-top:20px;
    text-Align:center;
`

const PartSNS = styled.div`
    float: left;
    margin-top :30px;
    padding:40px;    
    background: #DCDCDC;
    width: 1900px;
    height: 140px;
    border-radius: 40px;
`

const PartNews = styled.div`
    float: left;
    margin-top :30px;
    padding:40px;    
    background: #DCDCDC;
    width: 1900px;
    height: 800px;
    border-radius: 40px;
    

`
const PartNewscontionar = styled.div`
    float: left;
    background: #FFFFFF;
    width: 1840px;
    padding:30px; 
    height: 740px;
    max-width: 1900px;
    max-height: 800px;
    overflow: auto;
    border-radius: 40px;
`

const PartGonews  = styled.div`
    float: right;
    margin-right:50px;
    margin-top:5px;
    border-radius: 40px;
    font-size:15px;
    font-weight:bolder;
`