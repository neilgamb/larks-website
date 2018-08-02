import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  AppBar,
  Button,
  createMuiTheme,
  IconButton,
  MuiThemeProvider,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const theme = createMuiTheme();

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  state = { menuOpen: false };

  menuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const { menuOpen } = this.state;
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Fragment>
            <AppBar position="static">
              <Toolbar>
                <IconButton onClick={this.menuToggle} className={classes.menuButton}>
                  <Menu />
                </IconButton>
                <Typography variant="title" className={classes.flex}>
                  My Website
                </Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>

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

export default withStyles(styles)(App);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};
