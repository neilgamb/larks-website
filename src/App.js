import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const theme = createMuiTheme();

export default class App extends Component {
  state = { menuOpen: true };

  menuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <Navigation open={menuOpen} menuToggle={this.menuToggle} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}
