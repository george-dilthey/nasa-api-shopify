import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card.js'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const Container = () => {
  
  const apiKey = process.env.REACT_APP_NASA_API
  const url = `https://api.nasa.gov/planetary/apod?count=25&api_key=${apiKey}`
  const [loading, setLoading] = useState(true)
  const [apiData, setApiData] = useState([])
  
  const getData = () => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setApiData(c => [...c, ...data])
        setLoading(false)
      });
  }

  const loadMore = () => {
    const doc = document.documentElement
    if (doc.scrollTop + doc.clientHeight +1 >= doc.scrollHeight) {
      getData()
    }
  } 

  useEffect(() => {
    window.addEventListener('scroll', loadMore)
    getData();
  }, []);

  return (
    <div>
      {loading ? <div className="loading"></div> : null}
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4, 1400: 5}}>
        <Masonry gutter={4}>
          {apiData.map((d,i) => 
            <Card 
              image={d.url} 
              copyright={d.copyright} 
              date={d.date} 
              explanation={d.explanation} 
              title={d.title}
              key={i}
            />
          )}
        </Masonry>
      </ResponsiveMasonry>
      {loading ? null : <div className="loading" style={{position: "relative", marginTop: "5em", marginBottom: "5em"}}></div>}
    </div>
  )
}

export default Container;
