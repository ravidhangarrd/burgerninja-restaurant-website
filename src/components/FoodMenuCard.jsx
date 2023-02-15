import React from 'react'

const FoodMenuCard = (props) =>  {
  return (
    <>
    <section id='food-card'>
        <img src={props.imgValue} alt="food1" width={"40%"} height={"40%"} />
        <p id='card-title'>{props.foodTitle}</p>
        <p id='card-disc'>{props.foodDisc}</p>
        <p id='card-price'>{props.foodPrice}</p>
    </section>
    </>
  )
}

export default FoodMenuCard