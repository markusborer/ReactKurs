import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Login from './Login';
import PersonSearchPanel from './PersonSearchPanel';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.onLoginChange = this.onLoginChange.bind(this);
  }

  onLoginChange(value) {
    this.setState({ isLoggedIn: value });
  }

  render() {
    let welcomeMessage;
    let personSearchPanel
    if (this.state.isLoggedIn) {
        welcomeMessage = <div>{'Welcome ' + this.props.name}</div>;
        personSearchPanel = <PersonSearchPanel />
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Timer></Timer>
          <Login isLoggedIn={this.state.isLoggedIn} onChange={this.onLoginChange}></Login>
          {welcomeMessage}
          {personSearchPanel}
        </main>
      </div>
    );
  }
}

export default App;
