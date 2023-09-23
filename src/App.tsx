import { useState, useEffect } from 'react';
import './App.css';

const getRandomNumber = async ():Promise<number> => {
  const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
  const number = await res.text();
  return +number;
}

export const App = () => {
  
  const [ number, setNumber ] = useState<number>();

  useEffect(() => {
    getRandomNumber().then( num => setNumber( num ) );
  }, []);
  


  return (
    <div className='App App-header'>
      <h2>Numero aleatorio: </h2>
    </div>
  )
}
