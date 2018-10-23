import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, MuiThemeProvider, withStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Navigation from './Navigation';
import Home from './Home';
import Family from './Family';
import Children from './Children';
import Events from './Events';
import Proofing from './Proofing';
import Contact from './Contact';
import theme from './theme';
import birdie from './images/birdie.png';
import logo from './images/logo.png';
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
    const { classes } = this.props;
    const screenWidth = window.screen.width;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <AppBar className={classes.appBar} position="static">
              <Toolbar className={classes.toolBar}>
                <IconButton onClick={this.menuToggle}>
                  <Menu />
                </IconButton>
                <div style={{ width: '50%', height: 50, margin: 0 }}>
                  <Link
                    href="/"
                    to="/"
                    style={{ display: 'inline-block', width: '100%', height: '100%' }}
                  >
                    <img
                      style={{
                        height: 40,
                        position: 'absolute',
                        top: 5,
                        right: 5,
                        zIndex: -1,
                      }}
                      src={birdie}
                      alt="Catch the Birdie"
                    />
                    <img
                      style={{
                        position: 'absolute',
                        height: 40,
                        top: 15,
                        right: 45,
                        zIndex: -1,
                      }}
                      src={logo}
                      alt="Lark Elliott"
                    />
                  </Link>
                </div>
              </Toolbar>
            </AppBar>
            <Navigation open={menuOpen} menuToggle={this.menuToggle} />
            <Route exact path="/" render={() => <Home galleryColumns={galleryColumns} />} />
            <Route path="/family" render={() => <Family galleryColumns={galleryColumns} />} />
            <Route path="/children" render={() => <Children galleryColumns={galleryColumns} />} />
            <Route path="/events" render={() => <Events galleryColumns={galleryColumns} />} />
            <Route path="/proofing" render={() => <Proofing />} />
            <Route path="/contact" render={() => <Contact />} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  toolBar: {
    height: '100%',
    padding: '0px 10px',
    justifyContent: 'space-between',
  },
};

export default withStyles(styles)(App);

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
