import React, { useEffect, useState , useRef, useContext, useMemo, useCallback } from "react";
import { useLocation, useParams, useNavigate  } from "react-router-dom";
import noteContext from '../context'
// Hooks can be access within function based component only

function HooksUsed(){
    
    const [count , setCount] = useState(0);

    const IncNum = () =>{
        setCount(count +1 )
    }

    // use to get reference of form input
    const ref = useRef(null);
    console.log(ref)

    // like service can pass data 
     const contex = useContext(noteContext);
     console.log(contex)

    // use to find route path
    const location = useLocation();
    console.log(location)

    // in v6 useHistory(); is replaced with useNavigate()
    const navigate = useNavigate();
    const gotoPage = () => {
        navigate('/operator')
    }

    // use to find params in string
    const { fname } = useParams();
    console.log(fname)
   
    // It will call automatically call whenever render method called
    useEffect(() =>{
    alert("welcome to useEffect Hook")
    },[])
   //})

   // To increase performance of our Application with value
   const checkData = useMemo(() => {
    return 
   } , [])

   // To increase performance of our Application with Function
   const checkDataFunc = useCallback(() => {
    setCount(count +1 )
   } , [count])


    return (
        <>
            <h2>{count}</h2>
            <button className="btn btn-primary" onClick={IncNum}> Click Me</button>
        </>
    );

}

export default HooksUsed;