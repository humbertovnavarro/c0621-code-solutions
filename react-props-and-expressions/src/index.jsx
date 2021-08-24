import React from 'react';
import ReactDOM from 'react-dom';
const root = document.querySelector('#root');
function CustomButton(props) {
  return (
    <button>{props.text}</button>
  );
}
const element = (
  <div>
    <CustomButton text="I"></CustomButton>
    <CustomButton text="know"></CustomButton>
    <CustomButton text="React!"></CustomButton>
  </div>
);

ReactDOM.render(
  element, root
);
