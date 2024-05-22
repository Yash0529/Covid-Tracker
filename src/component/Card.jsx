import React from 'react';
import './Card.css';
const Card=(prop)=>{
  return (
    <>
      <div className='card' style={{background:prop.color}}>
        <h1 className='heading'>{prop.prp}</h1>
        <h1 className='heading2'>{prop.data}</h1>
      </div>
    </>
  )
}

export default Card;