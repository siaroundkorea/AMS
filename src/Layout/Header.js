import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import main from './AROUND Management Sheet.png'
class Header extends Component {
    render() {
        const { logged, onLogout } = this.props;
      return (
        <Container>
            <Element>
                {logged ? 
                    <ShortCut><Link to="/" onClick={onLogout}>로그아웃</Link></ShortCut> : 
                    <ShortCut><Link to="/login">로그인</Link></ShortCut>}  

                <Search><Link to="/"><img src={main} alt="Around" width="1400px" height="100px"></img></Link>
                </Search>

            </Element>
        </Container>
      );
    }
  }
  
export default Header;

const Container = styled.div`
    width: 1880px;
`
const Element = styled.div`
    margin-top:-50px;
    width: 1880px;
    height: 150px;
`
const ShortCut = styled.div`
    float: left;
    width: 1880px;
    height: 20px;
    text-align: right;
    // background-color: #FCAC38;
`
const Search = styled.div`
    float: left;
    width: 1850px;
    height: 100px;
    // background-color: #FFC22C;
    text-align:center;
    padding:15px;
`

