import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Paper, Typography, withStyles } from '@material-ui/core';

const Proofing = ({ classes }) => (
  <Fragment>
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <Typography align="left" paragraph variant="title">
              I will let you know via email when your images are ready for viewing online!
            </Typography>
            <Typography align="left" paragraph variant="title">
              It generally takes two weeks for me to edit, color correct and convert to black and
              white.
            </Typography>
            <Typography align="left" paragraph variant="title">
              Don’t hesitate to{' '}
              <a href="/contact">
                {' '}
                <u>contact me</u>
              </a>{' '}
              if you don’t get an email within two weeks.
            </Typography>
            <Typography align="left" paragraph variant="title">
              Once you hear from me, the process is easy:
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>
            <Typography align="left" paragraph variant="subheading">
              1) Follow this link:{' '}
              <Button className={classes.pixieButton} variant="contained">
                Launch Pixieset!
              </Button>
            </Typography>
            <Typography align="left" paragraph variant="subheading">
              2) Enter the password that I will give you in your email.
            </Typography>
            <Typography align="left" paragraph variant="subheading">
              3) Enjoy!
            </Typography>
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
    marginTop: 20,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  pixieButton: {
    marginLeft: 20,
  },
});

export default withStyles(styles)(Proofing);

Proofing.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
