import React from 'react'

const ServiceCard = (props) => {
  return (
    <>
    <section id='service-card'>
        <img id='scard-img' src={props.serImg} alt="service card" width={"40px"} height={"40px"} />
        <p id='scard-title'>{props.serTitle}</p>
        <p id='scard-disc'>{props.serDisc}</p>
    </section>
    </>
  )
}

export default ServiceCard