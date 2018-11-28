import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import AppBarWrapper from './AppBarWrapper';
import Navigation from './Navigation';
import Home from './Home';
import Family from './Family';
import Children from './Children';
import Events from './Events';
import Proofing from './Proofing';
import Contact from './Contact';
import theme from './theme';
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
    const galleryMargin = galleryColumns === 1 ? 56 : 63;

    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <AppBarWrapper menuToggle={this.menuToggle} />
            <Navigation open={menuOpen} menuToggle={this.menuToggle} />
            <div style={{ marginTop: galleryMargin }}>
              <Route exact path="/" render={() => <Home galleryColumns={galleryColumns} />} />
              <Route path="/family" render={() => <Family galleryColumns={galleryColumns} />} />
              <Route path="/children" render={() => <Children galleryColumns={galleryColumns} />} />
              <Route path="/events" render={() => <Events galleryColumns={galleryColumns} />} />
              <Route path="/proofing" render={() => <Proofing />} />
              <Route path="/contact" render={() => <Contact />} />
            </div>
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
