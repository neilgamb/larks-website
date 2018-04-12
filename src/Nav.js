import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const Nav = props => (
  <Drawer
    zDepth={1}
    containerStyle={{
      zIndex: 1000,
      marginTop: 60,
    }}
    width={200}
    open={props.menuOpen}
  >
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

Nav.propTypes = {
  menuOpen: PropTypes.bool,
  menuToggle: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  menuOpen: false,
};

export default Nav;
