import React, { useState, useEffect } from 'react'
import Card from './Components/Card/Card';
import axios from 'axios';
import './App.css';


function App() {
  const [meals, setMeals] = useState([])
  useEffect(()=>{
    axios.get("https://asm-dev-api.herokuapp.com/api/v1/food")
    .then((response)=>{
      const { data } = response.data
      setMeals(data.meals);
      console.log(response)
    })
  // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <div className="meal-cards">
      {
        meals.map((meal)=>(
          <Card key={meal.id} meal={meal}/>
        ))
      }
      </div>
      <div className="Footer">
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
}

export default App;
