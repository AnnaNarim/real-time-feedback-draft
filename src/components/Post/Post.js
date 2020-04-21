import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    backdrop : {
        zIndex : theme.zIndex.drawer + 1,
        color  : '#fff',
    },
}));

const Post = ({isDraft, post}) => {
    const classes = useStyles();
    const {title, id, text, author} = post;

    return (
        <Link className="no-underline ma1" to={`/post/${id}`}>
            <article className="bb b--black-10">
                <div className="flex flex-column flex-row-ns">
                    <div className="w-100 w-60-ns pl3-ns">
                        <h1 className="f3 fw1 baskerville mt0 lh-title">{isDraft ? `${title} (Draft)` : title}</h1>
                        <p className="f6 f5-l lh-copy">{text}</p>
                        <p className="f6 lh-copy mv0">By {author.name}</p>
                    </div>
                </div>
            </article>
        </Link>
    )
};

export default Post;
