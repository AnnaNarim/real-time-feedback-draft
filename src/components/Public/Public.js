import React, {Fragment, useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import LogoDark from "../../assets/logo-dark.png";

const useStyles = makeStyles((theme) => ({
    title : {
        marginBottom : 15,
        textAlign: 'center'
    },
    text     : {
        textAlign: 'center',
        marginBottom : 15,
    },
    container: {
      margin: 60,
    },
    logo: {
      textAlign: 'center',
      marginTop: 60,
      marginBottom: 30
    }
}));

const Public = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={LogoDark} alt="" width="70px" />
      </div>
      <div style={{ marginBottom: 30 }}>
        <Typography variant={'h4'} className={classes.title}> Welcome to Real Time Feedo! </Typography>
        <Typography variant={'h6'} className={classes.text}> Real-time-feedo is a web application created to ease and fasten lecturer’s interaction with the audience.  </Typography>
        <Typography variant={'h6'} className={classes.text}> During the live lecture or speech, people sitting in the audience can give their answers, feedback and questions via their phones directly to the speaker who will see their responses on his/her device, which will help him/her to have an overall opinion of what the audience is thinking and what is under question.  </Typography>
      </div>
      <div>
        <Typography variant={'h6'} className={classes.text}> If you are new here you can signup to have a new account and create rooms for your breathtaking lectures. </Typography>
        <Typography variant={'h6'} className={classes.text}> If you already have an account then simply can log in. </Typography>
        <Typography variant={'h6'} className={classes.text}> If you only have a Room ID and are an attendee of some stunning lecture who needs to give a Real Time Feedback than simply click on Enter Room in the menu.</Typography>
      </div>
      <Typography variant={'h6'} style={{ marginTop: 30, textAlign: 'center' }}> Enjoy!</Typography>
    </div>
  );
};

export default Public
