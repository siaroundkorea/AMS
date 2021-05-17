import React, { Component } from 'react';
import styled from 'styled-components';
import bopen from './bt_open_b.png'
import bclose from './bt_close_b.png'
import oopen from './bt_open_o.png'
import oclose from './bt_close_o.png'
import '../Button.css';

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
                <over><Itemstart onClick={this._Postattend}><img src={bopen} alt="출근"></img><img src={oopen} alt="출근"></img></Itemstart></over>
                <over><Itemend onClick={this._Postleave}><img src={bclose} alt="퇴근"></img><img src={oclose} alt="퇴근"></img></Itemend></over>
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