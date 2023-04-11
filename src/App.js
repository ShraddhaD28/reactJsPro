// React Component API Methods 
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM  from 'react-dom';
import InfoForm from './components/infoForm';
import Operator from './components/operators';
import PagenotFound from './components/pagenotFound'
import HooksUsed from './components/hooks';
import DefaultApicall from './components/api-call';
import NavbarCall from './navbar';

class App extends React.Component{
   constructor(){
      super();
      this.state = {
         msg: "Welcome to ReactJS Tutorial"
      };
//  this.UpdateState = this.UpdateState.bind(this);
//  this.forceUpdateState = this.forceUpdateState.bind(this)
    this.findDOMNodeHandler = this.findDOMNodeHandler.bind(this);

    this.callRefInput = null;

    this.setInputRef = element => {
      console.log(element)
     this.callRefInput = element;   
    }

    this.focusRefInput = () =>{
      if(this.callRefInput) this.callRefInput.focus();
    }
  
   }

   UpdateState(){
      // this.setState(object newState [, function callback]);
      this.setState({
         msg:"Welcome to ReactJS Tutorial"
      });
   }

   forceUpdateState(){
      // Component.forceUpdate(callback);
      this.forceUpdate();
   }

   findDOMNodeHandler(para){
      // ReactDOM.findDOMNode(component);
      this.setState({
         msg:"Welcome to ReactJS Tutorial"
      });
      console.log(para)
      var myDivOne = document.getElementById(para);
      ReactDOM.findDOMNode(myDivOne).style.color = 'red';
   }
   
   render()
   {
      return (
   <React.Fragment>

         <h1 style={{color:'green'}} className="text-center" id="myFav1">{this.state.msg}</h1>

          {/* <InfoForm brand={this.state.msg}  brand2="value2"></InfoForm>  */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarCall/>}/>
          <Route path="/operator" element={<Operator/>}/>
          <Route path="/forms" element={<InfoForm/>}/>
          <Route path="/hooks/:fname" element={<HooksUsed/>}/>
          <Route path="/apicall" element={<DefaultApicall/>}/>
          <Route path="*" element={<PagenotFound/>}/>
        </Routes>
      </BrowserRouter> 
         
   </React.Fragment>
);
}

}
export default App;