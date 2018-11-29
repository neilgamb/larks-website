import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import bio from './images/bio_bg.jpg';

const About = ({ classes, galleryColumns }) => (
  <Fragment>
    {galleryColumns > 2 ? (
      <div className={classes.root}>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className={classes.paper}>
              <Typography align="justify" variant="subheading" className={classes.bio}>
                lark<sup>2</sup> | l&auml;rk | <i>informal</i> <b>noun</b> something done for fun,
                especially something mischievous or daring; an amusing adventure or escapade: I only
                went along for a lark.
                <br /> <br />
                Welcome to Lark Elliott Photography! True to my name, on a lark I left a career in
                banking for a career in photography and have never looked back. I specialize in
                portraiture because I love the challange of capturing someone&apos;s true
                personality along with beautiful, natural lighting and background.
                <br /> <br />
                My photo sessions are FUN, no dressing up or props. I want the real you. I request
                that you be comfortable in what you wear! Outside only and dependent for sunlight.
                <br /> <br />
                Come enjoy the adventure with me and always...
                <br /> <br />
                Watch the birdie!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    ) : (
      <div className={classes.rootPhone}>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className={classes.paperPhone} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className={classes.paper}>
              <Typography align="justify" variant="subheading" className={classes.bioPhone}>
                lark<sup>2</sup> | l&auml;rk | <i>informal</i> <b>noun</b> something done for fun,
                especially something mischievous or daring; an amusing adventure or escapade: I only
                went along for a lark.
                <br /> <br />
                Welcome to Lark Elliott Photography! True to my name, on a lark I left a career in
                banking for a career in photography and have never looked back. I specialize in
                portraiture because I love the challange of capturing someone&apos;s true
                personality along with beautiful, natural lighting and background.
                <br /> <br />
                My photo sessions are FUN, no dressing up or props. I want the real you. I request
                that you be comfortable in what you wear! Outside only and dependent for sunlight.
                <br /> <br />
                Come enjoy the adventure with me and always...
                <br /> <br />
                Watch the birdie!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )}
  </Fragment>
);

const styles = theme => ({
  rootPhone: {
    flexGrow: 1,
    height: '100vh',
    padding: 50,
  },
  root: {
    flexGrow: 1,
    height: '100vh',
    padding: 50,
    backgroundImage: `url(${bio})`,
    backgroundSize: 'cover',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'transparent',
  },
  paperPhone: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'transparent',
    backgroundImage: `url(${bio})`,
    backgroundSize: 'cover',
    height: 200,
    marginTop: 30,
  },
  PageTitle: {
    marginLeft: 40,
  },
  bio: {
    marginTop: 20,
  },
});

export default withStyles(styles)(About);

About.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  galleryColumns: PropTypes.number.isRequired,
};
