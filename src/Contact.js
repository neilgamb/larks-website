import React, { Fragment } from 'react';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import { Phone, Email } from '@material-ui/icons';

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
  contactItem: {
    display: 'flex',
  },
  contactItemType: {
    width: 75,
    color: theme.palette.text.secondary,
  },
  contactItemValue: {
    display: 'flex',
    alignItems: 'center',
  },
  contactItemIcon: {
    fontSize: 18,
    marginRight: 10,
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
                <div className={classes.contactItem}>
                  <div className={classes.contactItemType}>Email</div>
                  <a href="mailto:neilgamb@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className={classes.contactItemValue}>
                      <Email className={classes.contactItemIcon} />neilgamb@gmail.com
                    </div>
                  </a>
                </div>
              </Typography>
              <Typography align="left" variant="subheading">
                <div className={classes.contactItem}>
                  <div className={classes.contactItemType}>Phone</div>
                  <a href="tel:1-704-576-3165">
                    <div className={classes.contactItemValue}>
                      <Phone className={classes.contactItemIcon} />704.576.3165
                    </div>
                  </a>
                </div>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <Typography align="left" variant="subheading">
                Reach Out!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default withStyles(styles)(Contact);
