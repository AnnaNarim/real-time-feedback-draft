import {gql} from "apollo-boost";
import React, {useEffect, useState} from "react";
import {useMutation} from "@apollo/react-hooks";
import {makeStyles} from "@material-ui/core/styles";
import {DRAFTS} from "../../constant";
import {Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

const CREATE_DRAFT_MUTATION = gql`
    mutation CreateDraftMutation($title: String!, $content: String!, $answerType:String!) {
        createDraft(title: $title, content: $content, answerType : $answerType) {
            id
            title
            content
            answerType
        }
    }
`;


const useStyles = makeStyles((theme) => ({
    submitBtn : {},
    selection : {
        margin : "15px 0"
    }
}));

const INITIAL_STATE = {
    title      : "",
    content    : '',
    answerType : 'poll'
};

const VALIDATION_INITIAL_STATE = {isValid : true, errorMsgs : {}}

const validateForm = (info) => {
    const errorMsgs = {};
    if(!info.title) {
        errorMsgs.title = 'Title is required field'
    }

    if(!info.content) {
        errorMsgs.content = 'Content is required field'
    }

    return {isValid : !Object.keys(errorMsgs).length, errorMsgs}
};

const CreatePost = (props) => {
    const classes = useStyles();
    const [info, setInfo] = useState(INITIAL_STATE);
    const [validInfo, setValidInfo] = useState(VALIDATION_INITIAL_STATE);

    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    const [createDraft] = useMutation(CREATE_DRAFT_MUTATION);

    const answerTypeOptions = [
        {value : 'poll', label : 'Poll'},
        {value : 'content', label : 'Text'},
        {value : 'pollAndText', label : 'Poll and Text'}
    ];

    const {title, content, answerType} = info,
        {isValid, errorMsgs = {}} = validInfo;

    useEffect(() => {
        if(!validInfo.isValid) {
            setValidInfo(VALIDATION_INITIAL_STATE)
        }
    }, [info]);

    if(redirectToReferrer) {
        return <Redirect to={{
            pathname : DRAFTS,
            state    : {shouldRefetch : true}
        }}/>
    }


    return <Container fixed>
        <h1>Create Draft</h1>
        <form onSubmit={(e) => {
            e.preventDefault();
            const newValidInfo = validateForm(info);
            if(newValidInfo.isValid === true) {
                createDraft({variables : {...info}}).then(() => {
                    setRedirectToReferrer(true);
                    setInfo(INITIAL_STATE)
                });
            } else {
                setValidInfo(newValidInfo)
            }
        }}>
            <TextField
                autoFocus
                label="Title"
                placeholder="Title"
                error={Boolean(errorMsgs.title)}
                helperText={Boolean(errorMsgs.title) ? errorMsgs.title : ''}
                fullWidth
                margin="normal"
                variant="outlined"
                type="content"
                value={title}
                name='title'
                onChange={({target}) => setInfo({...info, [target.name] : target.value})}
            />
            <TextField
                label="Content"
                multiline
                rows={5}
                rowsMax={10}
                placeholder="Content"
                error={Boolean(errorMsgs.content)}
                helperText={Boolean(errorMsgs.content) ? errorMsgs.content : ''}
                fullWidth
                margin="normal"
                variant="outlined"
                type="content"
                value={content}
                name='content'
                onChange={({target}) => setInfo({...info, [target.name] : target.value})}
            />

            <TextField
                className={classes.selection}
                select
                fullWidth
                label="Select type of the answer"
                value={answerType}
                name='answerType'
                onChange={({target}) => setInfo({...info, [target.name] : target.value})}
                variant="outlined"
                helperText="Please select preferred type of answers"
            >
                {answerTypeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
            </TextField>

            <Button className={classes.submitBtn}
                color='primary'
                variant="contained"
                disabled={!isValid}
                type="submit"
            >
                Create
            </Button>
        </form>
    </Container>;
};

export default CreatePost;
