import React from 'react'
import FoodMenuCard from './FoodMenuCard'
import food1 from '../assets/img/food1.png'
import food2 from '../assets/img/food2.png'
import food3 from '../assets/img/food3.png'


const FoodMenu = () => {
  return (
    <>
    <section id='food-menu'>
      <p>Food Menu</p>
      <h2>Fresh taste and great price</h2>
      <div className='food-menu-card'>
        <FoodMenuCard imgValue={food1} foodTitle={"Chicken Burger"} foodDisc={"Tasty Food"} foodPrice={"Rs 40.00"} />
        <FoodMenuCard imgValue={food2} foodTitle={"Special Burger"} foodDisc={"Tasty Food"} foodPrice={"Rs 60.00"} />
        <FoodMenuCard imgValue={food3} foodTitle={"Chicken Fry Pack"} foodDisc={"Tasty Food"} foodPrice={"Rs 80.00"} />
      </div>
    </section>
    </>
  )
}

export default FoodMenu