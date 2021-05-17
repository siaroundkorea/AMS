import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import main from './AROUND Management Sheet.png'
import person from './bt_b_people.png'
class Header extends Component {
    render() {
        const { logged, onLogout } = this.props;
      return (
        <Container>
            <Element>
                {logged ? 
                    <ShortCut><Link to="/" onClick={onLogout}><div style={{float:"right", fontSize: "15px"}}>로그아웃</div><div style={{marginTop:"-5px",marginRight:"7px" ,float:"right"}}><img src={person} width="30px" height="30px" alt="Around"></img></div></Link></ShortCut> : 
                    <ShortCut><Link to="/login"><div style={{float:"right", fontSize: "15px"}}>로그인</div><div style={{marginTop:"-5px",marginRight:"7px" ,float:"right"}}><img src={person} width="30px" height="30px" alt="Around"></img></div></Link></ShortCut>}  

                <Search><Link to="/"><img src={main} alt="Around" width="298px" height="88px"></img></Link>
                </Search>
            </Element>
        </Container>
      );
    }
  }
  
export default Header;

const Container = styled.div`
    width: 1980px;
`
const Element = styled.div`
    margin-top:-50px;
    width: 1980px;
    height: 150px;
`
const ShortCut = styled.div`
    float: left;
    width: 1980px;
    height: 50px;
    text-align: right;
    // background-color: #FCAC38;
`
const Search = styled.div`
    float: left;
    width: 1950px;
    height: 88px;
    text-align:center;
    padding:15px;
    border-bottom: 0.3px solid #000000;

`

