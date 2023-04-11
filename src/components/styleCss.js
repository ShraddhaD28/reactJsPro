import React from "react";
import styles from '../myStyle.module.css';

class styleCss extends React.Component{
 render()
 {
    const myStyle = {
        color:"Green",
        backgroundColor:"lightBlue",
        padding:"10px",
        fontFamily:"Arial",
    }
  return (
        <div>
            <p>Here you can find Types Style CSS</p>
            <h1 style={{ color:"Green", backgroundColor:"lightblue" }}>Here is Inline Style CSS</h1>
            <h3 style={myStyle}>Here is Object style</h3>   
            <h2 className={styles.Mainsec}>Here is module CSS style</h2>     
        </div>
     );
   }
}

export default styleCss;