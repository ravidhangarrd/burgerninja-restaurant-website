import React from 'react'
import ServiceCard from './ServiceCard'
import s1 from '../assets/img/s1.png'
import s2 from '../assets/img/s2.png'
import s3 from '../assets/img/s3.png'

const OverServices = () => {
  return (
    <>
    <section id='over-services-container'>
      <p>Services</p>
      <h2>We provide best quality food</h2>
      <div className='service-card-con'>
        <ServiceCard serImg={s1} serTitle={"Order"} serDisc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        <ServiceCard serImg={s2} serTitle={"Shipping"} serDisc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        <ServiceCard serImg={s3} serTitle={"Delivered"} serDisc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
      </div>
    </section>
    </>
  )
}

export default OverServices