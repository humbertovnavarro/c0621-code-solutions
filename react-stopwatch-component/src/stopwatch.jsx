import React from 'react';
class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      seconds: 0
    };
    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleFaceClick = this.handleFaceClick.bind(this);
  }

  handleFaceClick() {
    if (this.state.paused) {
      this.setState({ seconds: 0 });
    }
  }

  handleIconClick() {
    const paused = !this.state.paused;
    if (!paused) {
      this.clock = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    } else {
      clearInterval(this.clock);
    }
    this.setState({ paused: paused });
  }

  render() {
    const icon = this.state.paused ? 'play_arrow' : 'pause';
    return (
    <div className={'stopwatch'}>
      <button onClick={this.handleFaceClick}>
        <p>{this.state.seconds}</p>
      </button>
      <button onClick={this.handleIconClick}>
        <span className={'material-icons'}>{icon}</span>
      </button>
    </div>
    );
  }
}
export default StopWatch;
