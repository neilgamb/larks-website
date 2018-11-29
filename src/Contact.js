import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  ButtonBase,
  Grid,
  Paper,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Phone, Email } from '@material-ui/icons';

function Contact(props) {
  const { classes } = props;
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={0} className={classes.paper}>
              <Typography align="left" variant="subheading">
                <div className={classes.contactItem}>
                  <div className={classes.contactItemType}>Email</div>
                  <a href="mailto:lark@larkelliott.com" target="_blank" rel="noopener noreferrer">
                    <div className={classes.contactItemValue}>
                      <Email className={classes.contactItemIcon} />lark@larkelliott.com
                    </div>
                  </a>
                </div>
              </Typography>
              <Typography align="left" variant="subheading">
                <div className={classes.contactItem}>
                  <div className={classes.contactItemType}>Phone</div>
                  <a href="tel:1-704-968-5907">
                    <div className={classes.contactItemValue}>
                      <Phone className={classes.contactItemIcon} />704.968.5907
                    </div>
                  </a>
                </div>
              </Typography>
              <Typography align="left" variant="subheading">
                <div className={classes.contactItem}>
                  <div className={classes.contactItemType}>Insta</div>
                  <a href="https://www.instagram.com/larkelliott/">
                    <div className={classes.contactItemValue}>
                      <div className={classes.contactItemIcon}>
                        <i className="fab fa-instagram" />
                      </div>
                      <Typography>@larkelliott</Typography>
                    </div>
                  </a>
                </div>
              </Typography>
              <Typography align="left" variant="subheading">
                <div className={classes.contactItem}>
                  <div className={classes.contactItemType}>Facebook</div>
                  <a href="https://www.facebook.com/lark.elliott">
                    <div className={classes.contactItemValue}>
                      <div className={classes.contactItemIcon}>
                        <i className="fab fa-facebook-square" />
                      </div>
                      <Typography>lark.elliott</Typography>
                    </div>
                  </a>
                </div>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 20 }}>
            <Typography variant="title">Send Me A Message!</Typography>
            <Paper elevation={0} className={classes.paperContactForm}>
              <form method="POST" action="https://formspree.io/lark@larkelliott.com">
                <TextField
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="your@email.com"
                  margin="normal"
                  style={{ minWidth: 300 }}
                />
                <br />
                <TextField
                  placeholder="Type your message here"
                  label="Message"
                  name="message"
                  multiline
                  rows="4"
                  margin="normal"
                  style={{ minWidth: 300 }}
                />
                <br />
                <Button variant="contained" style={{ marginTop: 20 }}>
                  <ButtonBase type="submit">Send</ButtonBase>
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30,
    marginTop: 40,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paperContactForm: {
    color: theme.palette.text.secondary,
  },
  contactItem: {
    display: 'flex',
    marginTop: 10,
  },
  contactItemType: {
    width: 75,
    color: theme.palette.text.secondary,
    display: 'none',
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

export default withStyles(styles)(Contact);

Contact.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};
