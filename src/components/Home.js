import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    
  return (
    <div className='home'>
        <h5>
            Custom cakes, 
            gourmet cupcakes,
            <br/> and sweet treats available in
            <br/> Orange County.
        </h5>
        <h5 id='button'><Link to='/catalogue'>see more</Link></h5>
        <h1>Bakery <br/> &amp; Cafe</h1>
        <div className="home-image">
            
        </div>
       
    </div>
  )
}

export default Home