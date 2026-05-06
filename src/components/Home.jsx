import React from 'react'
import Header from './Header.jsx'
import FoodOption from './FoodOption.jsx'
import Grocery from './Grocery.jsx'
import DineOption from './DineOption.jsx'
import Banner from './Banner.jsx'
import CityFoodDelivery from './CityFoodDelivery.jsx'
import CityGroceryDelivery from './CityGroceryDelivery.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <FoodOption/>
      <Grocery/>
      <DineOption/>
      <Banner/>
      <CityFoodDelivery/>
      <CityGroceryDelivery/> 
    </div>
  )
}

export default Home
