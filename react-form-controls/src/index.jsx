import React from 'react';
import ReactDOM from 'react-dom';
class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: '' };
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Email
      </label>
      <input type="text" value={this.state.email} onChange={this.handleChange}>
      </input>
      <input type="submit"></input>
    </form>
    );
  }
}

ReactDOM.render(<CustomForm/>, document.querySelector('#root'));
