import React, { Component } from 'react';
import styled from 'styled-components';

// import withLogin from './LoginHoc';

class Commute extends Component {

    _Postattend =(e) =>{
        var sendid = "AKid="+window.sessionStorage.getItem('id')
        var str = "https://script.google.com/a/macros/aroundkorea.kr/s/AKfycbyLYSk5tAvcQD0h7rzoOUhc7rvNDn1-OuHVcEW1kh-Q/dev?AKswitch=2&"+sendid
        window.open(str,'알림','width=500, height=500, menubar=no, status=no, toolbar=no, resizeable=no')
      }  

    _Postleave =(e) =>{
        var sendid = "AKid="+window.sessionStorage.getItem('id')
        var str = "https://script.google.com/a/macros/aroundkorea.kr/s/AKfycbyLYSk5tAvcQD0h7rzoOUhc7rvNDn1-OuHVcEW1kh-Q/dev?AKswitch=3&"+sendid
        window.open(str,'알림','width=300, height=200, menubar=no, status=no, toolbar=no, resizeable=no')
      }    
   
    render(){
        return(
            <Content>
                <Itemstart onClick={this._Postattend}>출근</Itemstart>
                <Itemend onClick={this._Postleave}>퇴근 </Itemend>
            </Content>
        );
    }
}

// export default withLogin(Commute);
export default Commute;

const Content = styled.div`
    float: left;
    width:400px;
    height: 202px;
    background: #A6CDA7;
    border-radius: 30px;
`

const Itemstart = styled.div`
    float: left;
    width: 400px;
    height: 96px;
    margin-top: 2px;
    background: #F0A83E;
    border-radius: 80px;
    text-Align:center;
`
const Itemend = styled.div`
    float: left;
    width: 400px;
    height: 96px;   
    margin-top: 6px;
    background: #F0A83E;
    border-radius: 80px;
    text-Align:center;
 
`