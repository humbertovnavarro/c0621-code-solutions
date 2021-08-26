import React from 'react';
import ReactDOM from 'react-dom';

class PasswordInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: '', error: 'A password is required.'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    const newState = {value: value};
    if(value.length <= 0) {
      newState.error = 'A password is required.';
    } else if (value.length < 8) {
      newState.error = 'Your password is too short.';
    } else if (!value.match(/[A-Z]/)) {
      newState.error = 'Your password must contain a capital letter';
    } else if (!value.match(/[0-9]/)) {
      newState.error = 'Your password must contain a digit.';
    } else if (!value.match(/[!@#$%^&*()_+.<>?/'";:~`\[\]{}]/)) {
      newState.error = 'Your password must contain a special character.';
    } else {
      newState.error = '';
    }
    this.setState(newState);
  }

  render() {
    const icon = this.state.error ? 'times' : 'check';
    return (
      <div className="password-input">
        <label for="password">Password</label>
        <div>
          <input id="password"
          onChange={this.handleChange}
          type="password"
          value={this.state.value}>
          </input>
          <i class={`fas fa-${icon}`}></i>
        </div>
        {this.state.error &&
          <p>{this.state.error}</p>
        }
      </div>
    );
  }

}

ReactDOM.render(<PasswordInput/>,
  document.querySelector('#root')
);
