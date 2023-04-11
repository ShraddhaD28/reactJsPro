import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../actions';
function NavigateLayout() {
  
  // Allows you to extract data from the Redux store state, using a selector function.
  const myState = useSelector((state) => state.changeTheNumber )
  // This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
  const dispatch = useDispatch();

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/operator');
  }
  
  return (
     <div className="app flex-row align-items-center">
      ...          
          <button color="primary" className="px-4" onClick={dispatch(incNumber())}>
              Increment
            </button>
      ...
    </div>
  );
  }

  export default NavigateLayout;