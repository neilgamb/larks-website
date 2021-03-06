import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Paper, Typography, withStyles } from '@material-ui/core';
import logo from './images/logo_bg.png';

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
            <Typography align="left" paragraph variant="subheading" className={classes.pixieLink}>
              <span>1) Follow this link: </span>
              <Button
                target="_blank"
                href="https://larkelliottphotography.pixieset.com/"
                className={classes.pixieButton}
                variant="contained"
              >
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
      <Grid container direction="row" justify="center" alignItems="flex-end">
        <Paper elevation={0}>
          <img style={{ maxWidth: 300 }} src={logo} alt="Catch the Birdie" />
        </Paper>
      </Grid>
    </div>
  </Fragment>
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30,
    marginTop: 75,
  },
  paper: {
    color: theme.palette.text.secondary,
  },
  pixieButton: {
    marginLeft: 10,
    textAlign: 'center',
  },
  pixieLink: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default withStyles(styles)(Proofing);

Proofing.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
