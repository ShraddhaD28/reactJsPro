import { Component } from "react";

class ThemedButton extends Component{

   // static contextType = btnColrContext;

    render(){
        return <button className={this.context}>
            Welcome to Context
        </button>
    }
}

export default ThemedButton;