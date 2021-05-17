import React, { Component } from 'react';
import styled from 'styled-components';
import b1 from './bt_b_google.png';
import b2 from './bt_b_notion.png';
import b3 from './bt_b_slack.png';
import b4 from './bt_b_zoom.png';
import o1 from './bt_o_google.png';
import o2 from './bt_o_notion.png';
import o3 from './bt_o_slack.png';
import o4 from './bt_o_zoom.png';
import '../Button.css';

class Workspace extends Component {
    constructor(props) {
        super(props);
            this.state = {
              pageNum: "0",
            };
         }
         onHandleClick = ()=> {
            switch(this.state.pageNum){
                case "1":
                    window.open('https://drive.google.com/drive/shared-drives');
                    break;
                    case "2":
                        window.open('https://www.notion.so/AROUND-c7bd450933c54bcf8a2ea65dc05cb8cf');
                        break;
                        case "3":
                            window.open('https://app.slack.com/client/T013Q15JDNX/C014DKMLS64?selected_team_id=T013Q15JDNX');
                            break;
                            case "4":
                                window.open('https://zoom.us/');
                                break;       
                default:
                     alert('존재하지 않는 페이지 입니다.');
                        break;
            }
          }
    render(){
        return(
            <>
            <over><Button1 onMouseOver={()=>this.setState({pageNum:"1"})} onClick={this.onHandleClick}><img src={b1} alt="drive"></img><img src={o1} alt="drive"></img></Button1></over>
            <over><Button1 onMouseOver={()=>this.setState({pageNum:"2"})} onClick={this.onHandleClick}><img src={b2} alt="notion"></img><img src={o2} alt="notion"></img></Button1></over>
            <over><Button1 onMouseOver={()=>this.setState({pageNum:"3"})} onClick={this.onHandleClick}><img src={b3} alt="slack"></img><img src={o3} alt="slack"></img></Button1></over>
            <over><Button2 onMouseOver={()=>this.setState({pageNum:"4"})} onClick={this.onHandleClick}><img src={b4} alt="zoom"></img><img src={o4} alt="zoom"></img></Button2></over>
            {/* <workspaceButton1 onMouseOver={()=>this.setState({pageNum:"1"})} onClick={this.onHandleClick}></workspaceButton1>
            <workspaceButton1 onMouseOver={()=>this.setState({pageNum:"2"})} onClick={this.onHandleClick}></workspaceButton1>
            <workspaceButton1 onMouseOver={()=>this.setState({pageNum:"3"})} onClick={this.onHandleClick}></workspaceButton1>
            <workspaceButton2 onMouseOver={()=>this.setState({pageNum:"4"})} onClick={this.onHandleClick}></workspaceButton2> */}
            </>
        );
    }
}

export default Workspace;

const Button1 = styled.div`
    float: left;
    width: 76px;
    height: 79px;
    border-radius: 20px;
    margin-right : 5px;
`
const Button2 = styled.div`
    float: right;
    width: 76px;
    height: 79px;
    border-radius: 20px;
`