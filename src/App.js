import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Router from './Routes/Router';
import Store from './Store/store';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        logged: false,
        onLogin: this.onLogin,
        onLogout: this.onLogout
    }
  }

// Login Func
onLogin = () => {
    this.setState({
        logged: true
    });
}

// Logout Func
onLogout = () => {
    this.setState({
        logged: false
    });
    console.log('Goolge Logout.');
    window.sessionStorage.clear();
}


  componentDidMount() {
    const id = window.sessionStorage.getItem('id');
    if(id) {
      this.onLogin();
    }
    else {
      this.onLogout();
    }
  }

  render() {
    const { logged, onLogout } = this.state;

    return (
      <Store.Provider value={this.state}>
        <Layout>
          <Header logged={logged} onLogout={onLogout}/>

            <Router />
        </Layout>
      </Store.Provider>
    );
  }
}

const Layout = styled.div`
  margin : 25px auto;
  padding: 50px;
  display: flex;
  width: 1980px;
  flex-flow: row wrap;
`


export default App;