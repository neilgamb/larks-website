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
    padding: '10px 100px 10px 25px',
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
    <div style={{ marginTop: 75 }}>
      <NavLink
        exact
        className={props.classes.navLink}
        onClick={props.menuToggle}
        activeclass="active"
        to="/"
      >
        <MenuItem className={props.classes.menuItem}>Home</MenuItem>
      </NavLink>
      <NavLink
        className={props.classes.navLink}
        onClick={props.menuToggle}
        activeclass="active"
        to="/family"
      >
        <MenuItem className={props.classes.menuItem}>Family</MenuItem>
      </NavLink>
      <NavLink
        className={props.classes.navLink}
        onClick={props.menuToggle}
        activeclass="active"
        to="/children"
      >
        <MenuItem className={props.classes.menuItem}>Just the Kids</MenuItem>
      </NavLink>
      <NavLink
        className={props.classes.navLink}
        onClick={props.menuToggle}
        activeclass="active"
        to="/events"
      >
        <MenuItem className={props.classes.menuItem}>Events</MenuItem>
      </NavLink>
      <NavLink
        className={props.classes.navLink}
        onClick={props.menuToggle}
        activeclass="active"
        to="/proofing"
      >
        <MenuItem className={props.classes.menuItem}>Proofing</MenuItem>
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
    </div>
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
