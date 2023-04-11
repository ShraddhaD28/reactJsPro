import React from "react";
import { CSSTransitionGroup } from 'react-transition-group';
//import { styles } from './style.css';
//import { DropdownMenu } from 'reactstrap';

class themeswitcher extends React.Component{

    constructor(props){
        super(props);
        this.state = {items : ['BlockChain', 'ReactJS', 'Angular', 'Ionic', 'VueJS']}
        this.handleAdd = this.handleAdd.bind(this)
    }


handleAdd(){
   const newItems = this.state.items.concat([
        prompt('Enter Item Name')
   ]);
   this.setState({ items: newItems })
}

handleRemove(index){
    let newItems = this.state.items.slice();
    newItems.slice(index,1);
    this.setState({items:newItems})
}

render(){
    const items = this.state.items.map((item,i)=>(
        <div key={item} onClick={() => this.handleRemove(i)}>
            {item}
        </div>
    )) 
    return(
        <div>
            <h1>Animation Example</h1>
            <button onClick={this.handleAdd}>Insert Item</button>
            {/* <SplitButton bsSize="large" bsStyle={themeClass} title={`${theme || 'Default Block'} Theme`}></SplitButton> */}
            <CSSTransitionGroup 
                transitionName="example"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={600}
            > {items}
            </CSSTransitionGroup>
        </div>
    )
}
}

export default themeswitcher;