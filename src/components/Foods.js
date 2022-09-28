import React, { useState, useEffect}  from 'react'
import Card from './Card'


const Foods = () => {
  const [foods, setFoods]= useState([])

  useEffect(()=> {
    fetch("http://localhost:8001/items")
    .then(r => r.json())
    .then(item => setFoods(item))
  }, [])
  return (
    <div className='food-container'>
       <Card foods={foods}/>
    </div>
  )
}

export default Foods