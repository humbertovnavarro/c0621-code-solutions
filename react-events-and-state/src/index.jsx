import React from 'react';
import ReactDOM from 'react-dom';
class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isClicked: true }));
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.isClicked ? 'Thanks!' : 'Click me!'}</button>;
  }
}
ReactDOM.render(
  <CustomButton/>,
  document.querySelector('#root')
);
