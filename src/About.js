import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import bio from './images/bio_bg.jpg';
import bio_sm from './images/bio_sm.jpg';

const About = ({ classes, galleryColumns }) => (
  <Fragment>
    {galleryColumns > 2 ? (
      <div className={classes.root}>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className={classes.paper}>
              <Typography align="justify" variant="body2" className={classes.definition}>
                <span style={{ fontSize: '1.3rem', fontWeight: 600 }}>lark</span>
                <sup>2</sup> | l&auml;rk | <i>informal</i> <b>noun</b> something done for fun,
                especially something mischievous or daring; an amusing adventure or escapade:{' '}
                <i>I only went along for a lark</i>
              </Typography>
              <Typography align="justify" variant="subheading" className={classes.bio}>
                Welcome to Lark Elliott Photography! True to my name, on a lark I left a career in
                banking for a career in photography and have never looked back. I specialize in
                portraiture because I love the challange of capturing someone&apos;s true
                personality complimented by beautiful, natural lighting and background.
                <br /> <br />
                My photo sessions are FUN, no dressing up or props. I want the real you. I request
                that you be comfortable in what you wear! Outside only and dependent on sunlight.
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
              <Typography align="justify" variant="body2" className={classes.definition}>
                <span style={{ fontSize: '1.3rem', fontWeight: 600 }}>lark</span>
                <sup>2</sup> | l&auml;rk | <i>informal</i> <b>noun</b> something done for fun,
                especially something mischievous or daring; an amusing adventure or escapade:{' '}
                <i>I only went along for a lark</i>
              </Typography>
              <Typography align="justify" variant="subheading" className={classes.bio}>
                Welcome to Lark Elliott Photography! True to my name, on a lark I left a career in
                banking for a career in photography and have never looked back. I specialize in
                portraiture because I love the challange of capturing someone&apos;s true
                personality complimented by beautiful, natural lighting and background.
                <br /> <br />
                My photo sessions are FUN, no dressing up or props. I want the real you. I request
                that you be comfortable in what you wear! Outside only and dependent on sunlight.
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
    padding: 20,
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
    backgroundImage: `url(${bio_sm})`,
    backgroundSize: 'cover',
    height: 200,
    marginTop: 30,
  },
  PageTitle: {
    marginLeft: 40,
  },
  definition: {
    // fontFamily: 'Courier',
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
