import { animals } from './animals';
import ReactDOM from 'react-dom';
import React from 'react';

function displayFact(e){
  let val = e.target.getAttribute('alt');
  let id = Math.round(Math.random() * 2);
  let result = animals[val].facts[id];
  document.getElementById('fact').innerHTML = result;
};
let animalImg = [];
for(let animal in animals){
  animalImg.push(
    <img
      onClick={displayFact}
      key={animal}
      className='animal'
      alt={animal}
      src = {animals[animal].image}
      ara-label={animal}
      role='button'
    />
  )
};
const showBackground = Math.random() < 0.5;
const title = '';
const background = (
 <img 
  class='background'
  alt='ocean'
  src='/images/ocean.jpg'
 />
);
const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    <p id="fact"></p>
  <div className='animals'>
    {animalImg}
  </div>
  {showBackground && background}
  </div>
)

ReactDOM.render(animalFacts,document.getElementById('root'));