import React from 'react';
import ReactDOM from 'react-dom';
const topics = [
  {
    id: '1',
    label: 'Hypertext Markup Language',
    content: 'It does stuff.'
  },
  {
    id: '2',
    label: 'Cascading Style Sheets',
    content: 'It does stuff, except when it doesn\'t'
  },
  {
    id: '3',
    label: 'JavaScript',
    content: 'You tell it to do stuff.'
  },
  {
    id: '4',
    label: 'React',
    content: 'It reacts to stuff.'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { open: null };
  }

  handleClick(event) {
    if (!event.target.dataset.id) {
      return;
    }
    this.setState({ open: event.target.dataset.id });
  }

  render() {
    const topics = this.props.topics.map(topic => {
      const open = this.state.open === topic.id ? 'open' : 'closed';
      return (
        <li key={topic.id} className={`accordion-topic ${open}`}>
          <div>
            <h1 data-id={topic.id}>{topic.label}</h1>
          </div>
          <div>
            <p>{topic.content}</p>
          </div>
        </li>
      );
    });
    return (
      <ul className="accordion" onClick={this.handleClick}>
        {topics}
      </ul>
    );
  }
}
ReactDOM.render(
  <Accordion topics={topics}/>,
  document.querySelector('#root')
);
