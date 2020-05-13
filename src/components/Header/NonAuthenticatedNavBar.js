import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {ROOM, BLOG, SIGN_IN, SIGN_UP} from "../../constant";

const useStyles = makeStyles((theme) => ({
    text: {
        color: 'white'
    }
}));

const NonAuthenticatedNavBar = () => {
    const classes = useStyles();
    return <div>
        <Button component={Link} to={ROOM} className={classes.text}>
            Enter Room
        </Button>
        <Button component={Link} to={BLOG} className={classes.text}>
            Blog
        </Button>
        <Button component={Link} to={SIGN_IN} className={classes.text}>
            Login
        </Button>
        <Button component={Link} to={SIGN_UP} className={classes.text}>
            Sign Up
        </Button>
    </div>
};

export default NonAuthenticatedNavBar;
