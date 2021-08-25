import React from 'react';
import ReactDOM from 'react-dom';
class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    let classString;
    if (this.state.clicks <= 3) {
      classString = 'hot-button frozen';
    } else if (this.state.clicks <= 6) {
      classString = 'hot-button cool';
    } else if (this.state.clicks <= 9) {
      classString = 'hot-button warm';
    } else if (this.state.clicks <= 12) {
      classString = 'hot-button hot';
    } else if (this.state.clicks <= 15) {
      classString = 'hot-button sweltering';
    } else {
      classString = 'hot-button nuclear';
    }
    return <button onClick={this.handleClick} className={classString}>Hot Button</button>;
  }
}

ReactDOM.render(<HotButton/>, document.querySelector('#root'));
