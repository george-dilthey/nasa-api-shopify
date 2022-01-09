import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';


const Card = ({image, copyright, date, explanation, title}) => {
  

  useEffect(() => {

    }, []);

  return (
    <div className='card'>
      <img className='image' src={image} />
      <div className='description'>
        <div className='text'>This is my description</div>
      </div>
    </div>
  )

}

export default Card;
