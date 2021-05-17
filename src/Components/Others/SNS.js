import React, { Component } from 'react';
import styled from 'styled-components';
import f from './bt_b_f.png'
import n from './bt_b_n.png'
import i from './bt_b_i.png'
import y from './bt_b_y.png'



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
            <SNScontianer1 onMouseOver={()=>this.setState({pageNum:"1"})} onClick={this.onHandleClick}><img src={n} alt='Naver_Blog'></img></SNScontianer1>
            <SNScontianer1 onMouseOver={()=>this.setState({pageNum:"2"})} onClick={this.onHandleClick}><img src={f} alt='Facebook'></img></SNScontianer1>
            <SNScontianer1 onMouseOver={()=>this.setState({pageNum:"3"})} onClick={this.onHandleClick}><img src={i} alt='Instargram'></img></SNScontianer1>
            <SNScontianer2 onMouseOver={()=>this.setState({pageNum:"4"})} onClick={this.onHandleClick}><img src={y} alt='Youtube'></img></SNScontianer2>
            </>
        );
    }
}

export default SNS;

const SNScontianer1 = styled.div`
    float: left;    
    width: 453px;
    height: 140px;
    margin-right: 29px;
    border-radius: 40px;

`

const SNScontianer2 = styled.div`
    float: right;    
    width: 453px;
    height: 140px;
    border-radius: 40px;
`