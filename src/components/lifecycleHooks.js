
import React from "react";

class LifecycleHooks extends React.Component{

    componentWillMount(){
    console.log('Component WILL Mount')
    }
 
    // ComponentDidMount method runs after compoenent Render method has been rendered to DOM
    componentDidMount(){
       console.log('Component Did MOUNT');
    }
 
    // 
    componentWillReceiveProps(newProps){
       console.log('Component Will Receive Props')
    }
 
    shouldComponentUpdate(){
       return true;
    }
 
    componentWillUpdate(nextProps, nextState){
       console.log('Component WILL Update')
    }

   // componentDidUpdate call as soon as updating happens
    componentDidUpdate(prevProps, prevState){
     console.log('Compoent Did Update')
    }
 
    // compoentWillUnmount will call just after component destroy
    componentWillUnmount(){
       console.log('Compoenent WILL UNMOUNT')
    }

    render(){
    return ( 
        <></>
    );
    }

}

export default LifecycleHooks;
