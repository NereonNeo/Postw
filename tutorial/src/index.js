import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const posts = [
    {
      img:
        "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      title: "Dark Forest",
      text:
        "The Trisolarians, an alien species from the Alpha Centauri system, look to colonize Earth due to the eventual inevitable destruction of their own planet. However, The Trisolarian invasion fleet will reach Earth in 400 years. Earth knows",
      likes: 0,
      id: 1,
    },
    {
      img:
        "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      title: "Snow Forest",
      text:
        "The Trisolarians, an alien species from the Alpha Centauri system, look to colonize Earth due to the eventual inevitable destruction of their own planet. However, The Trisolarian invasion fleet will reach Earth in 400 years. Earth knows",
      likes: 0,
      id: 2,
    },
    {
      img:
        "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      title: "Light Forest",
      text:
        "The Trisolarians, an alien species from the Alpha Centauri system, look to colonize Earth due to the eventual inevitable destruction of their own planet. However, The Trisolarian invasion fleet will reach Earth in 400 years. Earth knows",
      likes: 0,
      id: 3,
    },
    {
      img:
        "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      title: "Forest",
      text:
        "The Trisolarians, an alien species from the Alpha Centauri system, look to colonize Earth due to the eventual inevitable destruction of their own planet. However, The Trisolarian invasion fleet will reach Earth in 400 years. Earth knows",
      likes: 0,
      id: 4,
    },

];
const productsItem = [
  {
    img:'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    like:0,
    price: 200,
    left:12,
    Assessment:2,
    des:'Food is what people and animals eat to survive. Food usually comes from animals and plants. It is eaten by living',
  },
  {
    img:'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    like:0,
    price: 300,
    left:2,
    Assessment:3,
    des:' Food is what people and animals eat to survive. Food usually comes from animals and plants. It is eaten by living',
 
  },
  {
    img:'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    like:0,
    price: 400,
    left:22,
    Assessment:4,
    des:' Food is what people and animals eat to survive. Food usually comes from animals and plants. It is eaten by living',

  },
  {
    img:'https://images.pexels.com/photos/2119758/pexels-photo-2119758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    like:0,
    price: 500,
    left:32,
    Assessment:5,
    des:' Food is what people and animals eat to survive. Food usually comes from animals and plants. It is eaten by living',
  
  }
];
export const reRender = () => {
    ReactDOM.render(<App posts={posts} products={productsItem}/>,document.getElementById('root'));
}
reRender()

