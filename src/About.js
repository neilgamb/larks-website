import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Grid, Paper, Toolbar, Typography, withStyles } from '@material-ui/core';

const About = props => (
  <Fragment>
    <AppBar className={props.classes.appBar} position="static">
      <Toolbar>
        <Typography className={props.classes.PageTitle} color="secondary" variant="title">
          {'>> About'}
        </Typography>
      </Toolbar>
    </AppBar>

    <div className={props.classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={props.classes.paper}>
            <Typography align="left" variant="subheading">
              Grid 1
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={props.classes.paper}>
            <Typography align="left" variant="subheading">
              Grid 2
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
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
});

export default withStyles(styles)(About);

About.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
