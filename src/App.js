import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Nav from './Nav';

import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
  }
  menuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="app">
            <AppBar
              title="Title"
              onLeftIconButtonClick={this.menuToggle}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />

            <Nav menuToggle={this.menuToggle} menuOpen={this.state.menuOpen} />

            <div
              style={{
                transform: this.state.menuOpen ? 'translate(200px, 0px)' : 'translate(0px, 0px)',
              }}
              className="main-wrapper"
            >
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
