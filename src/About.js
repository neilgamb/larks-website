import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

const About = props => (
  <Fragment>
    <AppBar className={props.classes.appBar} position="static">
      <Toolbar>
        <Typography className={props.classes.PageTitle} color="secondary" variant="title">
          {'>> About'}
        </Typography>
      </Toolbar>
    </AppBar>
    <Typography gutterBottom>Detail coming soon</Typography>
  </Fragment>
);

const styles = {
  PageTitle: {
    marginLeft: 180,
  },
  appBar: {
    position: 'absolute',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    top: 0,
    zIndex: -1,
  },
  appBarHeader: {
    flexGrow: 1,
  },
};

export default withStyles(styles)(About);

About.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
