import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({foods}) => {

  return (
    <>
    {
      foods.map(food => {
        return (

            <Link key={Math.floor(Math.random() * 10000)}>
              <div className='food-card' >
                <img alt={food.title} src={food.image}></img>
                <h4><b>{food.title}</b></h4>
              </div>
            </Link> 
        )
      })
    }
    </>
  )
}

export default Card