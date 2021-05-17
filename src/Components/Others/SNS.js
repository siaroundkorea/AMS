import React, { Component } from 'react';
import styled from 'styled-components';
import bf from './bt_b_f.png'
import bn from './bt_b_n.png'
import bi from './bt_b_i.png'
import by from './bt_b_y.png'
import of from './bt_o_f.png'
import on from './bt_o_n.png'
import oi from './bt_o_i.png'
import oy from './bt_o_y.png'
import '../Button.css';


class SNS extends Component {
    constructor(props) {
        super(props);
            this.state = {
              pageNum: "0",
              state: false
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
            <over><SNScontianer1 onMouseOver={()=>this.setState({pageNum:"1"})} onClick={this.onHandleClick}><img src={bn} alt='Naver_Blog'></img><img src={on} alt='Naver_Blog'></img></SNScontianer1></over>
            <over><SNScontianer1 onMouseOver={()=>this.setState({pageNum:"2"})} onClick={this.onHandleClick}><img src={bf} alt='Facebook'></img><img src={of} alt='Naver_Blog'></img></SNScontianer1></over>
            <over><SNScontianer1 onMouseOver={()=>this.setState({pageNum:"3"})} onClick={this.onHandleClick}><img src={bi} alt='Instargram'></img><img src={oi} alt='Naver_Blog'></img></SNScontianer1></over>
            <over><SNScontianer2 onMouseOver={()=>this.setState({pageNum:"4"})} onClick={this.onHandleClick}><img src={by} alt='Youtube'></img><img src={oy} alt='Naver_Blog'></img></SNScontianer2></over>
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
    &:hover{
        background: #339af0;
    }
`;

const SNScontianer2 = styled.div`
    float: right;    
    width: 453px;
    height: 140px;
    border-radius: 40px;
`