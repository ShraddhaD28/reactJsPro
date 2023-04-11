import React, { useEffect, useState } from 'react';  
import Card from 'react-bootstrap/Card'; 
import axios from 'axios';
import styles from '../myStyle.module.css';

function DefaultApicall(event){
  console.log(event)

   const [myData , setData] = useState([]);
   const [isError, setIsError] = useState("");

   // API Call using Axios library
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {  
         setData(res.data);
         console.log(res.data); 
         
        })
        .catch((error)=>{
          console.log(isError)
          setIsError(error.message);
        })  
  }, [])

   // API Call using Async Await

   useEffect(()=>{
    getApiData();
   }, [])

const getApiData = async () =>{
  try{
    let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);  
    setData(res.data);
    console.log(res.data);
  }catch(error){
    setIsError(error.message);
  }
}

 

        return (
          <div className={styles.section}>
          <h1>Axios Tutorial</h1>
          <div className='row'>
          <div className='card-sec' >
      {myData.map((post) =>{
      const { id, title, body } = post;
      return <div key={id}> 
          <Card className={styles.card}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
      </Card>
          </div>
        
        })}
        </div>
      </div>
      </div>
        );
      }

export default DefaultApicall;