import React from "react";
import Tours from "./components/Tours"
import {useState} from 'react'
import data from './data.js'
const App = () => {
  const [tour,setTours] = useState(data);
  function removeCard(id){
    const newTour = tour.filter(function(t) {
      return t.id !== id;
    });    
    setTours(newTour);
  }
  function Refresh(){
    setTours(data);
  }
  if(tour.length===0){
    return(<div className="refresh">
      <h1 className="heading">Plan A Trip</h1>
      <button onClick={()=>Refresh()} className="btn-white">REFRESH</button>
    </div>)
  }
  return(<div className="container">
    <h1 className="heading">Plan A Trip</h1>
    <Tours tours={tour} removeCard={removeCard}></Tours>
  </div>
  )
};

export default App;
