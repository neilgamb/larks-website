import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, MenuItem, IconButton, withStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

const styles = {
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    transition: '250ms',
  },
  menuItem: {
    padding: '20px 100px 20px 25px',
  },
  menuItemOne: {
    padding: '20px 100px 20px 25px',
    marginTop: 60,
  },
  navLink: {
    textDecoration: 'none',
  },
};

const Navigation = props => (
  <Drawer transitionDuration={300} open={props.open}>
    <IconButton
      style={{ transform: props.open ? 'none' : 'rotate(45deg)' }}
      className={props.classes.closeButton}
      onClick={props.menuToggle}
    >
      <Close />
    </IconButton>
    <NavLink
      className={props.classes.navLink}
      onClick={props.menuToggle}
      activeclass="active"
      to="/home"
    >
      <MenuItem className={props.classes.menuItemOne}>Home</MenuItem>
    </NavLink>
    <NavLink
      className={props.classes.navLink}
      onClick={props.menuToggle}
      activeclass="active"
      to="/about"
    >
      <MenuItem className={props.classes.menuItem}>About</MenuItem>
    </NavLink>
    <NavLink
      className={props.classes.navLink}
      onClick={props.menuToggle}
      activeclass="active"
      to="/contact"
    >
      <MenuItem className={props.classes.menuItem}>Contact</MenuItem>
    </NavLink>
  </Drawer>
);

Navigation.propTypes = {
  open: PropTypes.bool,
  menuToggle: PropTypes.func.isRequired,
  classes: PropTypes.object,
};

Navigation.defaultProps = {
  open: false,
};

export default withStyles(styles)(Navigation);
