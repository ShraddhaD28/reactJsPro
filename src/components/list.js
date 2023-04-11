import React from 'react'; 
class List extends React.Component{

   // function NameList(){
   // const listItems = myList.map()
   //  }
       render(){
          return(
             <ul>
                <li>
                   {this.props.data.name}
                </li>
             </ul>
          )
       }
    }

    export default List