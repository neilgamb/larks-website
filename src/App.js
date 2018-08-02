import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default class App extends Component {
  state = { menuOpen: false };

  menuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Fragment>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}
