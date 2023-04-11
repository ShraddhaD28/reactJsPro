import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../myStyle.module.css';
class infoForm extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        // Uncontrolled Component
        this.input1 = React.createRef();
        this.input2 = React.createRef();

        // Controlled Component
        this.state = {name: '',company:''}
        this.updateChange1 = this.updateChange1.bind(this);
        this.updateChange2 = this.updateChange2.bind(this);
        this.updateSubmitControlled = this.updateSubmitControlled.bind(this);     
        this.updateSubmitUnControlled = this.updateSubmitUnControlled.bind(this);        
    }
   
    updateSubmitControlled(event){
    console.log(event)
    
    alert("you have submitted form successfully " +this.state.name+ " " +this.state.company)
    event.preventDefault(); //In react we cannot return false to prevent the default behaviour we must call preventDefault() event 
    }

    updateSubmitUnControlled(event){
    console.log(event);
    console.log(this.props.brand)
    alert("you have submitted form successfully " +this.input1.current.value+ " " +this.input2.current.value)
    event.preventDefault(); 
    }

    updateChange1(event){
        this.setState({name:event.target.value})
    }
    updateChange2(event){
        this.setState({company:event.target.value})
    }

    updateChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }
render(){
    return(
        
    <div>

        <h1 style={{textAlign: 'center'}} className='Main-sec'>Uncontrolled Form</h1>

     <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={this.input1} placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCompanyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="date"  ref={this.input2} placeholder="Enter Company Name" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={this.updateSubmitUnControlled}>
        Submit
      </Button>
    </Form>


       <h1 className={styles.Mainsec}>Controlled Form</h1>

       <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={this.state.name} onChange={this.updateChange1} placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="text"  value={this.state.company} onChange={this.updateChange2} placeholder="Enter Company Name" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={this.updateSubmitControlled}>
        Submit
      </Button>
    </Form>

    </div>

    );
  }
}
export default infoForm;