import React, { Component } from 'react';
import styles from '../myStyle.module.css';

class Operators extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {isLoggedIn:false}
    }

    // Ternary operator

    handleLogin(){
        let data = this.state.isLoggedIn
        this.setState({isLoggedIn: data? false :true})
    }

    render(){
        return (
            <div className={styles.Mainsec}>
                <h1>Conditional Rendering</h1>
                <h2> {this.state.isLoggedIn ? 'Please Login First!' : 'Welcome Back!'}</h2>
                <button onClick={this.handleLogin}> {this.state.isLoggedIn ? 'Logout' : 'Login'}</button>
            </div>
        );
    }
}

export default Operators;