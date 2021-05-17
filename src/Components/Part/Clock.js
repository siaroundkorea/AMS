import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';

class Clock extends Component{
    constructor(props){
        super(props)
        this.launchClock()
        this.state = {
            currentMouth: (new Date()).getMonth(),
            currentDate: (new Date()).getDate(),
            currentHours: (new Date()).getHours(),
            currentMinutes: (new Date()).getMinutes(),
            currentSeconds: (new Date()).getSeconds()
        }
    }
    launchClock(){
        setInterval(()=> {
            // console.log('Updating time....')
            this.setState({
                currentMouth: (new Date()).getMonth(),
                currentDate: (new Date()).getDate(),
                currentHours: (new Date()).getHours(),
                currentMinutes: (new Date()).getMinutes(),
                currentSeconds: (new Date()).getSeconds()
            })
        },600000)
    }        
    render(){
        // console.log('Rendering Clock.....')
        return (
            <PartBClock>
            <div style={{float:"left",fontSize:"48px", fontWeight:"bolder"}}>{this.state.currentMouth+1}월 {this.state.currentDate}일 </div>
            <div style={{marginLeft:"13px",marginTop:"15px",float:"left", fontSize:"36px", fontWeight:"bolder"}}>{this.state.currentHours}시 {this.state.currentMinutes}분 </div>
            </PartBClock>
        )
    }
}
export default Clock;

const PartBClock = styled.div`
    color: #FFC63B;
    width: 730px;
    height: 107px;
    
`