import React from 'react';
import ReactDOM from 'react-dom';
class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 1, className: 'hot-button frozen' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let className = this.state.className;
    if (this.state.clicks === 6) {
      className = 'hot-button cool';
    }
    if (this.state.clicks === 9) {
      className = 'hot-button warm';
    }
    if (this.state.clicks === 12) {
      className = 'hot-button hot';
    }
    if (this.state.clicks === 15) {
      className = 'hot-button sweltering';
    }
    if (this.state.clicks === 18) {
      className = 'hot-button nuclear';
    }
    this.setState({ clicks: this.state.clicks + 1, className: className });
  }

  render() {
    return <button onClick={this.handleClick} className={this.state.className}>Hot Button</button>;
  }
}

ReactDOM.render(<HotButton/>, document.querySelector('#root'));
