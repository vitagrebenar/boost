import React, {useState} from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Horizontal from '../../components/Horizontal/Horizontal'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


const Home = () => {

    const [category,setCategory] = useState("All");

  return (
    <div>
      <Banner/>
      <Horizontal category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home


