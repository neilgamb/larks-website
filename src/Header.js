import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const Header = ({ classes, title, menuToggle }) => (
  <AppBar className={classes.appBar} position="static">
    <Toolbar className={classes.toolBar}>
      <IconButton onClick={menuToggle}>
        <Menu />
      </IconButton>
      <Typography variant="title">{title}</Typography>
      <div />
    </Toolbar>
  </AppBar>
);

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

export default withStyles(styles)(Header);

Header.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  menuToggle: PropTypes.func.isRequired,
};
