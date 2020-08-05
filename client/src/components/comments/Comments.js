import React, {Fragment, useContext} from 'react'
import CommentContext from '../../context/commentContext'
import CommentItem from './CommentItem'

const Comments = () => {
    const commentContext = useContext(CommentContext);
    const {comments} = commentContext;

    return (
        <Fragment>
            {comments.map(comment => 
                <CommentItem key={comment.id} comment={comment}/>
            )}
        </Fragment>
    )
}
export default Comments;