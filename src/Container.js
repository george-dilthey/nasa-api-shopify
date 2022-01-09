import './App.css';
import { useEffect } from 'react';

const Container = () => {

  const getData = () => {
    return fetch("https://randomuser.me/api/")
          .then((response) => response.json())
          .then((data) => console.log(data));
  }

  useEffect(() => {
    //getData();
    console.log(process.env.NASA_API)
    }, []);

  return (
    <div>Hello</div>
  )

}

export default Container;
