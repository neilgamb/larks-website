import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import {
  AppBar,
  IconButton,
  MuiThemeProvider,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Navigation from './Navigation';
import Home from './Home';
import Family from './Family';
import Children from './Children';
import Events from './Events';
import Proofing from './Proofing';
import About from './About';
import Contact from './Contact';
import theme from './theme';
import logo from './images/logo.png';
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
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <AppBar className={classes.appBar} position="static">
              <Toolbar className={classes.toolBar}>
                <IconButton onClick={this.menuToggle} className={classes.menuButton}>
                  <Menu />
                </IconButton>
                <Typography variant="title" className={classes.appBarHeader}>
                  <Link className={classes.logoWrapper} to="/">
                    <img className={classes.logo} src={logo} alt="Lark Elliott.com" />
                    <img className={classes.birdie} src={birdie} alt="Catch the Birdie" />
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>

            <Navigation open={menuOpen} menuToggle={this.menuToggle} />

            <Route
              exact
              path="/"
              render={props => <Home {...props} galleryColumns={galleryColumns} />}
            />
            <Route
              path="/family"
              render={props => <Family {...props} galleryColumns={galleryColumns} />}
            />
            <Route
              path="/children"
              render={props => <Children {...props} galleryColumns={galleryColumns} />}
            />
            <Route
              path="/events"
              render={props => <Events {...props} galleryColumns={galleryColumns} />}
            />
            <Route path="/proofing" component={Proofing} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
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
  appBarHeader: {
    width: '50%',
    height: 50
  },
  toolBar: {
    height: '100%',
    paddingRight: 0,
    justifyContent: 'space-between'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logoWrapper: {
    height: '100%',
    width: '100%',
    display: 'inline-block'
  },
  logo: {
    height: 40,
    position: 'absolute',
    right: 45,
    top: 15,
    zIndex: -1,
  },
  birdie: {
    height: 40,
    position: 'absolute',
    right: 5,
    top: 5,
    zIndex: -1,
  },
};

export default withStyles(styles)(App);

App.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
