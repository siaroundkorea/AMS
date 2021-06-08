import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            imgUrl: '',
            provider: '',

        }
    }
    // Google Login
    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            imgUrl: res.profileObj.imageUrl,
            provider: 'google'
        });
        this.doSignUp();
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    doSignUp = () => {
        const { id, name, email, imgUrl, provider} = this.state;
        window.sessionStorage.setItem('id', id);
        window.sessionStorage.setItem('name', name);
        window.sessionStorage.setItem('email', email);
        window.sessionStorage.setItem('imgUrl', imgUrl);
        window.sessionStorage.setItem('provider', provider);
        this.props.onLogin();
        this.props.history.push('/');
    }   


    render() {
        return (
            <Container>
 
                <GoogleLogin
                    clientId={"253259056466-at8stjhkls4ok6o86mgvbr1g4dgvgic7.apps.googleusercontent.com"}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                />
            </Container>
        );
    }
}
const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: 0 auto;
`

export default withRouter(Login);
