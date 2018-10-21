import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Login from './Login';
import PersonSearchPanel from './PersonSearchPanel';
import { Row, Col } from 'react-materialize';

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
          <Row>
            <Col s={4} m={4} className="left-align">
              <Login isLoggedIn={this.state.isLoggedIn} onChange={this.onLoginChange}></Login>
            </Col>
            <Col s={4} m={4}>
              <img src={logo} className="App-logo" alt="logo" />
              {welcomeMessage}
            </Col>
            <Col s={4} m={4}>
            </Col>
          </Row>
        </header>
        <main>
          {personSearchPanel}
        </main>
        <footer className="black white-text">
          <Row>
            <Col s={6} m={6} className="left-align">&copy; Copyright Markus Borer</Col>
            <Col s={6} m={6} className="right-align"><Timer /></Col>
          </Row>
        </footer>
      </div>
    );
  }
}

export default App;
