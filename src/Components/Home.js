import React, { Component } from 'react';
import styled from 'styled-components';
import Clock from './Part/Clock'
import Clip from './Part/Clip'
import Info from './Part/Info'
import Commute from './Part/Commute'
import SNS from './Others/SNS'
import News from './Others/News'
import Workspace from './Part/Workspace'


class Home extends Component {
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
              <PartAaastitle><div style={{fontSize:"20px", fontWeight:"bolder"}}> 이번 주 니가 해야할 일</div></PartAaastitle>
              <PartAaasButton>공사중입니다.</PartAaasButton>
            </PartAaas>

            <PartAworkspace>
              <PartAworkspacetitle><div style={{fontSize:"20px", fontWeight:"bolder"}}> 일하러 가기</div></PartAworkspacetitle>
              <Workspace/>
            </PartAworkspace>
          </PartA>

          {/* ------------------------------------ PatrB ------------------------------------ */}
          <PartB>
            <PartBtitle>
              <div style={{fontSize:"60px", fontWeight:"bolder"}}> Today`s Schedule</div>
              <Clock></Clock>
              </PartBtitle>

            <PartBmain>
              <PartBcalender>
                <PartBcalendertitle>
                  <div style={{fontSize:"30px", fontWeight:"bolder"}}> Calendar</div>
                </PartBcalendertitle>
                  <PartBcalendermain>
                    <iframe  title ="calendar" src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FSeoul&amp;src=YXJvdW5ka29yZWEua3Jfc3NxZWcyNTQ2cWdpMHM1ZGNudm51Y2lsMjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfbTUzNmc3ZW5ocjN2aGVyNnU2OHJpMzVuN2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3Jfa3Z0c2k5YnBsM2E4b3JhcGpnZWgzajMwMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Y190YXBxcjNpa2g2bGpnNWZiaWQ5b2ozbzQ3OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=YXJvdW5ka29yZWEua3JfbTNrZXVvcGlkcTg3Yzc1ZWJhdDlpZTJ1ZDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfNnVxOGZhOWFybWZpZm1rNjBtaHQwZmQ3cDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfMmlkdjAwbGttaGk5cGdhZjNxOHJhZXYxMmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfZnRpMDByc2NzdnJyZXQxdmRhdDdrOHV2ODhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfbG83M3BhY2x1M2pyc3VuaDdjdHNnODg1dHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YXJvdW5ka29yZWEua3JfamQ5dmtiMGFrcG83MzBobDBoazc1b2Z1Z2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=a28uc291dGhfa29yZWEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%230B8043&amp;color=%23D50000&amp;color=%23EF6C00&amp;color=%23F6BF26&amp;color=%2333B679&amp;color=%23039BE5&amp;color=%234285F4&amp;color=%23B39DDB&amp;color=%239E69AF&amp;color=%23616161&amp;color=%230B8043&amp;color=%23795548&amp;mode=WEEK&amp;showNav=0&amp;showTitle=0&amp;showPrint=0&amp;showTz=0&amp;showDate=0&amp;showCalendars=0" style={{width:"650px", height:"661px"}}></iframe>
                  </PartBcalendermain>
              </PartBcalender>

              <PartBblank/>

              <PartBmail>
                <PartBmailtitle>
                  <div style={{fontSize:"30px", fontWeight:"bolder"}}> Mail</div>
                </PartBmailtitle>
                <PartBmailmain>
                    공사중입니다.
                </PartBmailmain>
          
              </PartBmail>
            </PartBmain>
          </PartB>

          {/* ------------------------------------ PatrC ------------------------------------ */}
          <PartC>
            <PartCtitle/>
            <PartCmain>
              <PartCmaintitle>
                <div style={{fontSize:"30px", fontWeight:"bolder"}}> 어라운드 짹짹이</div>
              </PartCmaintitle>
              
              <PartCclipboard>
                <Clip/>
              </PartCclipboard>
            </PartCmain>
          </PartC>

          {/* ------------------------------------ SNS ------------------------------------ */}
          <PartSNS>
            <SNS/>
          </PartSNS>     
          {/* ------------------------------------ News ------------------------------------ */}
          <PartNews>
            <PartNewscontionar><News/></PartNewscontionar>
          </PartNews>
          {/* ------------------------------------ feed ------------------------------------ */}
          <Place/>
            <Partfeed/>
          <Place/>
        </Content>
        

      );
    }
  }
  

export default Home;

const Content = styled.div`
  width: 1880px;
`
const PartA = styled.div`
    margin-top :50px;  
    padding : 40px;  
    background: #00C547;
    float: left;
    width: 400px;
    height: 1200px;
    border-radius: 40px;
`

const PartAinfo = styled.div`
    float: left;
    width: 400px;
    height: 566px;
    margin-bottom :40px;
`

const PartAcommute = styled.div`
    background: #868482;
    float: left;
    width: 400px;
    height: 202px;
    margin-bottom :40px;
    border-radius: 40px;
`

const PartAaas = styled.div`
    float: left;
    width: 400px;
    height: 142px;
    margin-bottom :40px;
    border-radius: 30px;
`

const PartAaastitle = styled.div`
    float: left;
    width: 400px;
    height: 40px;
    margin-bottom :3px;
    color: #0082F9;
`
const PartAaasButton = styled.div`
    background: #F0A83E;
    float: left;
    text-align: center;
    width: 400px;
    height: 90px;
    border-radius: 20px;
`

const PartAworkspace = styled.div`
    float: left;
    width: 400px;
    height: 193px;
    margin-bottom :40px;
    border-radius: 35px;
`
const PartAworkspacetitle = styled.div`
    float: left;
    width: 400px;
    height: 48px;
    margin-bottom :3px;
    color: #0082F9;
`



const PartB = styled.div`
    margin-top :50px;
    margin-left: 50px; 
    margin-right: 50px; 
    float: left;
    width: 730px;
    height: 1280px;
`
const PartBtitle = styled.div` 
    background: #ffffff;
    color: #0082F9;
    width: 730px;
    height: 140px;
`

const PartBmain = styled.div` 
    width: 730px;
    height: 1132px;
`
const PartBcalender = styled.div` 
    width: 650px;
    height: 723px;
    padding: 40px;
    background: #00C547;
    border-radius: 40px;
`
const PartBcalendertitle = styled.div` 
    width: 650px;
    height: 50px;
    margin-bottom: 8px;
    color: #0082F9;
`
const PartBcalendermain = styled.div` 
    width: 650px;
    height: 660px;
`
const PartBblank = styled.div`
    background: #ffffff; 
    width: 730px;
    height: 25px;
    
`
const PartBmail = styled.div` 
    width: 650px;
    height: 231px;
    padding: 40px;
    border-radius: 40px;
    background: #00C547;
`
const PartBmailtitle = styled.div` 
    width: 650px;
    height: 50px;
    margin-bottom: 5px;
    color: #0082F9;
`
const PartBmailmain = styled.div` 
    background: #868482;
    width: 650px;
    height: 179px;
    text-align: center;
`




const PartC = styled.div`
    margin-top :50px;    
    float: left;
    width: 570px;
    height: 1280px;
    border-radius: 40px;
`
const PartCtitle = styled.div` 
    background: #ffffff;
    color: #0082F9;
    width: 570px;
    height: 143px;
    border-radius: 40px;
    
`
const PartCmain = styled.div` 
    background: #00C547;
    width: 490px;
    height: 1057px;
    padding : 40px;
    border-radius: 40px;
`

const PartCmaintitle = styled.div` 
    width: 490px;
    height: 42px;
    color: #0082F9;
    border-radius: 40px;
`
const PartCclipboard = styled.div` 
    background: #FFFFFF;
    width: 490px;
    height: 1007px;
    padding: 5px;
    border-radius: 40px;
    max-width: 490px;
    max-height: 1007px;
    overflow: auto;
`


const PartSNS = styled.div`
    float: left;
    margin-top :50px;
    padding-top:40px;
    padding-bottom:40px;    
    background: #00C547;
    width: 1880px;
    height: 140px;
`

const PartNews = styled.div`
    float: left;
    margin-top :50px;
    padding:40px;    
    background: #FFDE38;
    width: 1800px;
    height: 800px;
    

`
const PartNewscontionar = styled.div`
    float: left;
    background: #FFFFFF;
    width: 1800px;
    height: 800px;
    max-width: 1800px;
    max-height: 800px;
    overflow: auto;
`


const Place = styled.div`
    float: left;
    margin-top :10px;
    width: 575px;
    height: 110px;
    background-color: #FDDC38;
`

const Partfeed = styled.div`
    float: left;
    width: 730px;
    height: 110px;
    margin-top :10px;
    background: #FF432D;
`