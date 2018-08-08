import React, { Fragment } from 'react';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Contact(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <Typography align="left" variant="subheading">
                Contact
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className={classes.paper}>
              <Typography align="left" variant="subheading">
                <div style={{ display: 'flex' }}>
                  <div>Email</div>
                  <div>neilgamb@gmail.com</div>
                </div>
              </Typography>
              <Typography align="left" variant="subheading">
                <div style={{ display: 'flex' }}>
                  <div>Phone</div>
                  <div>704.576.3165</div>
                </div>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className={classes.paper}>
              xs=12 sm=6
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default withStyles(styles)(Contact);
