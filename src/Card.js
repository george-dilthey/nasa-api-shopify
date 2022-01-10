import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Card = ({image, copyright, date, explanation, title}) => {
  
  const [liked, setLiked] = useState(false)

  const handleClick = () => {
    setLiked(!liked)
  }



  useEffect(() => {

    }, []);

  return (
    <div className='card' onClick={handleClick}>
      <img className='image' src={image} alt={title} />
      <div className='description'>
        <div className='text'>
          <h1>{title}</h1>
          <h2>{copyright}</h2>
          <p className='explanation'>{explanation}</p>
          <div className='like-button'>
            <Button 
              variant={liked ? "contained" : "outlined" }
              startIcon={liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
              color = "error"
            >
              {liked ? 'Liked' : 'Like'}
            </Button>
          </div>
        </div>
        

      </div>
    </div>
  )

}

export default Card;
