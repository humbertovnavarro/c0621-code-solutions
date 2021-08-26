import React from 'react';
import ReactDOM from 'react-dom';
import Drawer from './drawer';
const games = [
  {
    title: 'The Legend of Zelda'
  },
  {
    title: 'A Link to The Past'
  },
  {
    title: 'Ocarina of Time'
  },
  {
    title: 'Majoras Mask'
  },
  {
    title: 'The Wind Waker'
  },
  {
    title: 'Breath of the Wild'
  }
];
ReactDOM.render(
  <Drawer title={'Choose a Game'} items={games}/>,
  document.querySelector('#root')
);
