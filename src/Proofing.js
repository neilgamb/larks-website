import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Paper, Typography, withStyles } from '@material-ui/core';

const Proofing = props => (
  <Fragment>
    <div className={props.classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper elevation={0} className={props.classes.paper}>
            <Typography align="left" paragraph variant="subheading">
              Instructions on how to access / view / order proofs via third party proofing
              application (ie Pixieset) will go here
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={props.classes.paper}>
            <Typography align="left" paragraph variant="subheading">
              Link to Pixieset will go here
            </Typography>
            <Button variant="contained">Launch Pixieset!</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  </Fragment>
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
});

export default withStyles(styles)(Proofing);

Proofing.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
