import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

const Proofing = props => (
  <Fragment>
    <AppBar className={props.classes.appBar} position="static">
      <Toolbar>
        <Typography className={props.classes.PageTitle} color="secondary" variant="title">
          {'>> Proofing'}
        </Typography>
      </Toolbar>
    </AppBar>
    <Typography gutterBottom>Detail coming soon</Typography>
    <Typography>
      This page will include instructions and link to access proofs via a third party proofing
      service (ie Pixieset.com)
    </Typography>
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

export default withStyles(styles)(Proofing);

Proofing.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
