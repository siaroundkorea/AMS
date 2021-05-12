import React, { Component } from 'react';
import styled from 'styled-components';



class SNS extends Component {
    constructor(props) {
        super(props);
            this.state = {
              pageNum: "0",
            };
         }
         onHandleClick = ()=> {
            console.log(this.state.pageNum)
            switch(this.state.pageNum){
                case "1":
                    window.open('https://blog.naver.com/aroundkorea');
                    break;
                    case "2":
                        window.open('https://www.facebook.com/aroundkorea920');
                        break;
                        case "3":
                            window.open('https://www.instagram.com/aroundkorea_/?hl=ko');
                            break;
                            case "4":
                                window.open('https://www.youtube.com/channel/UCGTOKkkRUEKHC4qmonG_Iwg');
                                break;       
                default:
                     alert('존재하지 않는 페이지 입니다.');
                        break;
            }
          }
    render(){
        return(
            <>
            <SNScontianer1 onMouseOver={()=>this.setState({pageNum:"1"})} onClick={this.onHandleClick}>Naver_Blog</SNScontianer1>
            <SNScontianer1 onMouseOver={()=>this.setState({pageNum:"2"})} onClick={this.onHandleClick}>Facebook</SNScontianer1>
            <SNScontianer1 onMouseOver={()=>this.setState({pageNum:"3"})} onClick={this.onHandleClick}>Instargram</SNScontianer1>
            <SNScontianer2 onMouseOver={()=>this.setState({pageNum:"4"})} onClick={this.onHandleClick}>Youtube</SNScontianer2>
            </>
        );
    }
}

export default SNS;

const SNScontianer1 = styled.div`
    float: left;    
    background: #868482;
    width: 453px;
    height: 140px;
    margin-right: 22px;
    border-radius: 40px;
    text-align:center;
`

const SNScontianer2 = styled.div`
    float: right;    
    background: #868482;
    width: 453px;
    height: 140px;
    border-radius: 40px;
    text-align:center;
`