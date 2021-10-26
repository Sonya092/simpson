import { useEffect, useState } from 'react';
import axios from 'axios';


export default function QuoteQuard() {
  const [simpsons, setSimpsons] = useState([]);
  

  useEffect(() => {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      setSimpsons(data);
    })
  }, []);
  
  const getQuote = () => {
   
    axios
   .get('https://simpsons-quotes-api.herokuapp.com/quotes')
   .then((response) => response.data)
   .then((data) => {
     setSimpsons(data);
   })
    
  };

  return (
    <>
    {simpsons.map((simpson) => {
      return (
        <>
        <h2>{simpson.character}</h2>
        <img src={simpson.image} alt='' ></img>
        <p>{simpson.quote}</p>
        </>
        )
      })}
    <button onClick={getQuote}>Oupsi</button>
    </>
  );


}