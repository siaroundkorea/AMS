import React, { useState} from 'react';
import styled from 'styled-components';
import withLogin from '../LoginHoc';
import Iframe from 'react-iframe';
import Icon from './Icon.png';
import { Link } from 'react-router-dom';


function Edit() {
    const [date, setDate] = useState();
    const [starttime, setStarttime] = useState();
    const [endtime, setEndtime] = useState();
    const [time, setTime] = useState();
    const [reason, setReason] = useState();
    var test="https://docs.google.com/spreadsheets/d/e/2PACX-1vSQwWAfhgZpkE2ibqUlhO06xvQH5ZRxSLor66i79CdhkjUcxn-2CW3-QN0AiUXnfSIJiS8VUtIO9Etk/pubhtml?gid="+window.localStorage.getItem(window.sessionStorage.getItem('name'))+"&single=true&widget=true&headers=false&range=A:I";      


    const _handleDate =e=>{
        setDate(e.target.value)
    };
    
    const _handleStarttime  =e=>{
        setStarttime(e.target.value)
    };
    
    const _handleEndtime  =e=>{
        setEndtime(e.target.value)
    };
    
    const _handleReason =e=>{
        setReason(e.target.value)
    };

    const _handleTime =e=>{
        setTime(e.target.value)
    };
    
    
    const _PostEditinfo =e=>{
        var sendop = "AKswitch=4&"
        var sendid = "AKid="+window.sessionStorage.getItem('id')+"&"
        var senddate = "AKdate="+date+"&"
        var sendstarttime = "AKstarttime="+starttime+"&"
        var sendendtime = "AKendtime="+endtime+"&"
        var sendtime = "AKtime="+time+"&"
        var sendreason = "AKreason="+reason
        var str = "https://script.google.com/a/macros/aroundkorea.kr/s/AKfycbyLYSk5tAvcQD0h7rzoOUhc7rvNDn1-OuHVcEW1kh-Q/dev?"+sendop+sendid+senddate+sendstarttime+sendendtime+sendtime+sendreason
        window.open(str,'알림','width=300, height=200, menubar=no, location=no, status=no, toolbar=no, resizeable=0')
    }  

 
        return (
          <Content>
            <h2> 수정 페이지 입니다.</h2>
            <Iframe url= {test}
                    position="relative"
                    width= "1565px" 
                    height="800px"
                    /> 
            <div>

                <p>수정하고 싶은 날짜 : <input type="date" value={date} onChange={_handleDate}></input></p>
                <p>출근시간: <input type="text" value={starttime} onChange={_handleStarttime}></input></p>
                <p>퇴근시간: <input type="text" value={endtime} onChange={_handleEndtime}></input></p>
                <p>추가시간: <input type="text" value={time} onChange={_handleTime}></input></p>
                <p>사유: <input type="text" width="300" height="200" value={reason} onChange={_handleReason}></input></p>
                <hr/>
                <button onClick={_PostEditinfo}>수 정</button>
                <Link to="/edit"><button> 새로고침 </button></Link>
                
            </div>
            <Editalert>
                    <h3>1. 수정이 가능한 날짜는 마지막 출근 날짜부터 7일 전까지 입니다.</h3>
                    <h3>2. 출/퇴근 시간은 24시형태로 시간만 기입하면 됩니다. (예시 9시 출근/14시 퇴근 = 9와 14만 기입).</h3>
                    <h3>3. 사유란에 연차 를 적으면 연차 일 수에서 차감됩니다.</h3>
                    <h3>4. 수정사항에 버그가 발생하면 노션 버그게시판을 활용해주시길 바랍니다.</h3>
                    <h3>5. 수정사항은 Google의 마음에 따라 약 1~5분 사이에 갱신됩니다. </h3>
            </Editalert>
            <Imgalert>
                <img src={Icon} alt=""></img>
            </Imgalert>
          </Content>
        );
      
}

 
export default withLogin(Edit);


const Content = styled.div`
  margin: 0 auto;
  width: 1500px;
`

const Editalert = styled.div`
  width: 1090px;
  height: 210px;
  border: 5px solid Red;
  border-radius: 30px;  
  padding : 10px;
  margin-top: 30px;
  float: left;
`
const Imgalert = styled.div`
    width: 300px;
    height: 210px;
    float: left;
    padding: 30px;
    margin-top: -40px;
`