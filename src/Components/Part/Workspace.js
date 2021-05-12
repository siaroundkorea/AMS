import React, { Component } from 'react';
import styled from 'styled-components';

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
            <Button1 onMouseOver={()=>this.setState({pageNum:"1"})} onClick={this.onHandleClick}>Drive</Button1>
            <Button1 onMouseOver={()=>this.setState({pageNum:"2"})} onClick={this.onHandleClick}>Notion</Button1>
            <Button1 onMouseOver={()=>this.setState({pageNum:"3"})} onClick={this.onHandleClick}>Slack</Button1>
            <Button2 onMouseOver={()=>this.setState({pageNum:"4"})} onClick={this.onHandleClick}>Zoom</Button2>
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
    background: #F0A83E;
    float: left;
    width: 95px;
    height: 90px;
    border-radius: 20px;
    margin-right :1.6%;
    text-align:center;
`
const Button2 = styled.div`
    background: #F0A83E;
    float: right;
    width: 95px;
    height: 90px;
    border-radius: 20px;
    text-align:center;
`