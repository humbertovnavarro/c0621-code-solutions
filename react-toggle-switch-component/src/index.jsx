import React from 'react';
import ReactDOM from 'react-dom';
class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    const classString = this.state.toggled ? 'on' : 'off';
    return (
      <span>
      <button onClick={this.handleClick} className={`slider ${classString}`}>
        <div className={'slider-circle'}>
        </div>
      </button>
      <span className={'slider-text'}>
          {this.state.toggled ? 'ON ' : 'OFF'}
      </span>
      </span>
    );
  }
}

ReactDOM.render(
  <ToggleSwitch/>,
  document.querySelector('#root')
);
