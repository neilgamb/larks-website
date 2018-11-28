import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import birdie from './images/birdie.png';
import logo from './images/logo.png';

const AppBarWrapper = ({ classes, menuToggle, location }) => {
  function capitalize(string) {
    const stringFormatted = string.replace('/', '');
    return stringFormatted.charAt(0).toUpperCase() + stringFormatted.slice(1);
  }
  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar className={classes.toolBar}>
        <Typography align="left" color="secondary" variant="subheading">
          <IconButton onClick={menuToggle}>
            <Menu />
          </IconButton>
          {capitalize(location.pathname)}
        </Typography>
        <div style={{ width: '50%', height: 50, margin: 0 }}>
          <Link href="/" to="/" style={{ display: 'inline-block', width: '100%', height: '100%' }}>
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
  );
};

const styles = {
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
  },
  toolBar: {
    height: '100%',
    padding: '0px 10px',
    justifyContent: 'space-between',
  },
};

export default withRouter(withStyles(styles)(AppBarWrapper));

AppBarWrapper.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  menuToggle: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
};
