import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {Link} from "react-router-dom";
import EditIcon from '@material-ui/icons/EditOutlined';
import IconButton from "@material-ui/core/IconButton";
import {withStyles} from "@material-ui/core";
import DeletePost from "./PostDelete";
import UpdatePost from "./PostEdit";

const useStyles = makeStyles({
    root  : {
        maxWidth : 345,
    },
    media : {
        height : 140,
    },
});

const GreenSwitch = withStyles({
    switchBase: {
        color: '#fafafa',
        '&$checked': {
            color: 'rgb(26,148,49)',
        },
        '&$checked + $track': {
            backgroundColor: 'rgb(26,148,49)'
        },
    },
    checked: {},
    track: {},
})(Switch);

export default function Post({isDraft, post,refresh}) {
    const classes = useStyles();


    const {title, id, content, author} = post;

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea component={Link} to={`/post/${id}`}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" noWrap>
                        {title}

                        {/*{author.name}*/}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <FormControlLabel
                    control={
                        <GreenSwitch
                            // checked={!isDraft}
                            // onChange={()=>{}}
                            name="isDraft"
                            color="secondary"
                        />
                    }
                    label="Publish"
                />
                <DeletePost title={title} id={id} refresh={refresh}/>
                <UpdatePost  title={title} id={id}  content={content} refresh={refresh}/>
            </CardActions>
        </Card>
    );
}
