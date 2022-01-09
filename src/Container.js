import './App.css';
import { useEffect } from 'react';

const Container = () => {

  const getData = () => {
    return fetch("https://randomuser.me/api/")
          .then((response) => response.json())
          .then((data) => console.log(data));
  }

  const nasaApi = process.env.REACT_APP_NASA_API

  useEffect(() => {
    //getData();
    console.log(nasaApi)
    }, []);

  return (
    <div>Hello</div>
  )

}

export default Container;
