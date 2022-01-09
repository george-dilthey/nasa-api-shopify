import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';


const Card = ({image, copyright, date, explanation, title}) => {
  
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(!liked)
  }



  useEffect(() => {

    }, []);

  return (
    <div className='card' onClick={handleClick}>
      <img className='image' src={image} />
      <div className='description'>
        <div className='text'>This is my description</div>
        <div>{liked ? 'Liked' : 'Not Liked'}</div>

      </div>
    </div>
  )

}

export default Card;
