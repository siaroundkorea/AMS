import React, { Component } from 'react';
import styled from 'styled-components';
import open from './bt_open_b.png'
import close from './bt_close_b.png'

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
                <>
                <Itemstart onClick={this._Postattend}><img src={open} alt="출근"></img></Itemstart>
                <Itemend onClick={this._Postleave}><img src={close} alt="퇴근"></img></Itemend>
                </>
        );
    }
}

// export default withLogin(Commute);
export default Commute;


const Itemstart = styled.div`
    float: left;
    width: 320px;
    height: 92px;
`
const Itemend = styled.div`
    float: left;
    width: 320px;
    height: 92px;   
    margin-top: 5px;

`