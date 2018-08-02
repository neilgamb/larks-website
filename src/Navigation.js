import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, MenuItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const Navigation = props => (
  <Drawer open={props.open}>
    <NavLink onClick={props.menuToggle} activeclass="active" to="/home">
      <MenuItem style={{ marginTop: 4 }}>Home</MenuItem>
    </NavLink>
    <NavLink onClick={props.menuToggle} activeclass="active" to="/about">
      <MenuItem>About</MenuItem>
    </NavLink>
    <NavLink onClick={props.menuToggle} activeclass="active" to="/contact">
      <MenuItem>Contact</MenuItem>
    </NavLink>
  </Drawer>
);

Navigation.propTypes = {
  open: PropTypes.bool,
  menuToggle: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  open: false,
};

export default Navigation;
