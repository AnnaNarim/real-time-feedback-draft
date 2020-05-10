import React, {Fragment, useRef, useState} from 'react'
import {gql} from 'apollo-boost'
import {useMutation, useQuery} from "@apollo/react-hooks";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles";
import {Redirect, withRouter} from "react-router-dom";
import DeletePost from "../Post/PostDelete";
import PublishPost from "../Post/PostPublish";
import UpdatePost from "../Post/PostEdit";
import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {ANSWER, DRAFTS} from "../../constant";
import TextField from "@material-ui/core/TextField/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import {clone} from "../../lib/jsUtils";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useForm, Controller} from "react-hook-form";
import {ThanksForSubmitting, TimeIsOut} from "./ThanksForSubmitting";

const FIELDS_QUERY = gql`
    query AnswerFormQuery($id: ID!) {
        class(id: $id) {
            id
            name
            post {
                title
                content
                anonymous
                answerType
                id
                fields{
                    id
                    label
                    type
                }
            }
            published

        }
    }
`;

const CREATE_ATTENDEE = gql`
    mutation CreateAttendee($name:String!, $answers:[inputAnswer!]!, $classId:ID! ) {
        createAttendee(name:$name,answers: $answers ,classId: $classId) {
            id
        }
    }
`;

const useStyles = makeStyles((theme) => ({
    backdrop : {
        zIndex : theme.zIndex.drawer + 1
    },
    root     : {
        padding : '2em'
    }
}));

const SinglePostView = (props) => {
    const {match} = props,
        {params = {}} = match,
        {id} = params;

    const classes = useStyles();
    const {control, handleSubmit, watch, errors} = useForm();
    const {loading, data = {}} = useQuery(FIELDS_QUERY, {
        variables : {id},
        options   : {fetchPolicy : 'network-only'}
    });

    const [createAttendee, {loading : submitting}] = useMutation(CREATE_ATTENDEE);
    const [isSubmitted, setIsSubmitted] = useState(false);


    if(!id)
        return <Redirect to={ANSWER}/>;

    const {class : postClass} = data;

    if(loading) {
        return <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    }

    if(postClass === null || postClass === undefined)
        return <Redirect to={ANSWER}/>;


    const {name, post = {}, published} = postClass,
        {fields = [], title, content, anonymous} = post;

    const onSubmit = ({name = "Anonymous", ...fields}) => {
        const answers = Object.keys(fields).reduce((accum, key) => {
            const answer = {field : {id : key}, value : fields[key]};
            accum.push(answer);
            return accum;
        }, []);
        createAttendee({variables : {name : name, answers, classId : id}})
            .then(() => setIsSubmitted(true));
    };

    if(published === false) {
        return <TimeIsOut/>
    }

    if(isSubmitted) {
        return <ThanksForSubmitting/>
    }

    return (
        <Container fixed className={classes.root}>
            <Backdrop className={classes.backdrop} open={submitting}>
                <CircularProgress color="inherit"/>
            </Backdrop>

            <Typography variant='h3' align='center'>Class {name}</Typography>
            <Typography variant='h4' align='left'>{title}</Typography>
            <Typography variant='h6' align='left'> {content}</Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                {!anonymous ?
                    <Controller
                        label="Name"
                        fullWidth
                        margin='normal'
                        variant="outlined"
                        as={TextField}
                        rules={{required : true}}
                        error={!!errors.name}
                        helperText={!!errors.name ? "This field is required" : "Please enter name"}
                        name='name'
                        defaultValue={''}
                        control={control}
                    /> : null
                }

                {
                    fields.map(({id, label}) => (
                        <Controller
                            key={id}
                            label={label}
                            margin='normal'
                            variant="outlined"
                            as={TextField}
                            rules={{required : true}}
                            error={!!errors[id]}
                            helperText={!!errors[id] ? "This field is required" : ''}
                            name={id}
                            control={control}
                            fullWidth
                            defaultValue={''}
                        />
                    ))}

                <Button color="primary" variant="contained" type="submit" disabled={isSubmitted}>Submit Answers</Button>
            </form>
        </Container>
    )
};

export default withRouter(SinglePostView);
