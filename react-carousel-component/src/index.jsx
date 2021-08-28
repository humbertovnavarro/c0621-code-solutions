import React from 'react';
import ReactDOM from 'react-dom';
const slides = [
  {
    src: 'https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/3x'
  },
  {
    src: 'https://cdn.betterttv.net/emote/58ae8407ff7b7276f8e594f2/3x'
  },
  {
    src: 'https://cdn.betterttv.net/emote/5aa1d0e311237146531078b0/3x'
  },
  {
    src: 'https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/3x'
  },
  {
    src: 'https://cdn.betterttv.net/emote/5b77ac3af7bddc567b1d5fb2/3x'
  }
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { source: slides[0].src, index: 0, timedOut: false };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.autoPan = setInterval(() => {
      if (this.state.timedOut) {
        return;
      }
      this.next();
    }, 3000);
  }

  previous() {
    let nextIndex = this.state.index - 1;
    if (nextIndex < 0) {
      nextIndex = this.props.slides.length - 1;
    }
    this.setState({ source: slides[nextIndex].src, index: nextIndex });
  }

  update(index) {
    const nextIndex = Number.parseInt(index, 10);
    this.setState({ source: slides[nextIndex].src, index: nextIndex });
  }

  next() {
    let nextIndex = this.state.index + 1;
    if (nextIndex > this.props.slides.length - 1) {
      nextIndex = 0;
    }
    this.setState({ source: slides[nextIndex].src, index: nextIndex });
  }

  handleClick(event) {
    this.setState({ timedOut: true });
    clearInterval(this.timeout);
    this.timeout = setTimeout(() => { this.setState({ timedOut: false }); }, 3000);
    if (event.target.dataset.index) {
      this.update(event.target.dataset.index);
    } else if (event.target.dataset.control === 'left') {
      this.previous();
    } else if (event.target.dataset.control === 'right') {
      this.next();
    }
  }

  render() {
    const dots = [];
    for (let i = 0; i < this.props.slides.length; i++) {
      dots.push((
        <i data-index={i} key={i} className={`fas fa-circle ${this.state.index === i ? 'active' : 'inactive'}`}></i>
      ));
    }
    return (
      <div className="carousel" onClick={this.handleClick}>
        <div className="row row-90 item-center space-evenly text-center">
          <div className="col-10">
            <i data-control="left" className="fas fa-chevron-left"></i>
          </div>
          <div className="col-90 full-height">
            <div className="image-container">
              <img src={this.state.source}></img>
            </div>
          </div>
          <div className="col-10">
            <i data-control="right" className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="row row-10">
          <div className="carousel-dot-container full-height">
            {dots}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Carousel slides={slides}/>, document.querySelector('#root'));
