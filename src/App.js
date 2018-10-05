import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import Navigation from './Navigation';
import Home from './Home';
import Family from './Family';
import Children from './Children';
import Events from './Events';
import Proofing from './Proofing';
import About from './About';
import Contact from './Contact';
import theme from './theme';
import birdie from './images/birdie.png';
import './App.css';

class App extends Component {
  state = { menuOpen: false, galleryColumns: 2 };

  componentWillMount = () => {
    const screenWidth = window.screen.width;
    let galleryColumns;
    if (screenWidth > 1000) {
      galleryColumns = 3;
    } else if (screenWidth > 500 && screenWidth <= 1000) {
      galleryColumns = 2;
    } else {
      galleryColumns = 1;
    }
    this.setState({ galleryColumns });
  };

  menuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { menuOpen, galleryColumns } = this.state;
    const screenWidth = window.screen.width;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <Navigation open={menuOpen} menuToggle={this.menuToggle} />
            <Link href="/" to="/">
              <img
                style={{
                  height: screenWidth < 500 ? 30 : 40,
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  zIndex: 2,
                }}
                src={birdie}
                alt="Catch the Birdie"
              />
            </Link>
            <Route
              exact
              path="/"
              render={() => <Home menuToggle={this.menuToggle} galleryColumns={galleryColumns} />}
            />
            <Route
              path="/family"
              render={() => <Family menuToggle={this.menuToggle} galleryColumns={galleryColumns} />}
            />
            <Route
              path="/children"
              render={() => (
                <Children menuToggle={this.menuToggle} galleryColumns={galleryColumns} />
              )}
            />
            <Route
              path="/events"
              render={() => <Events menuToggle={this.menuToggle} galleryColumns={galleryColumns} />}
            />
            <Route path="/proofing" render={() => <Proofing menuToggle={this.menuToggle} />} />
            <Route path="/about" render={() => <About menuToggle={this.menuToggle} />} />
            <Route path="/contact" render={() => <Contact menuToggle={this.menuToggle} />} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
