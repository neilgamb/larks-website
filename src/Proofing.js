import React, { Fragment } from 'react';
import { Typography, withStyles } from '@material-ui/core';

const Proofing = () => (
  <Fragment>
    <Typography gutterBottom variant="headline">
      Proofing
    </Typography>
    <Typography gutterBottom>Detail coming soon</Typography>
    <Typography>
      This page will include instructions and link to access proofs via a third party proofing
      service (ie Pixieset.com)
    </Typography>
  </Fragment>
);

const styles = {};

export default withStyles(styles)(Proofing);
