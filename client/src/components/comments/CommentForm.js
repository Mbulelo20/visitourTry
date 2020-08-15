import React, {useState, useContext} from 'react';
import CommentContext from '../../context/commentContext';
 

const CommentForm = () => {
    const commentContext = useContext(CommentContext);

    const [comment, setComment] = useState({
        userComment: ''
    })
    const {userComment} = comment;

    const onChange = e => setComment({...comment, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        commentContext.Post(comment);
        setComment({
            userComment: ''
        })
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="post a comment..." name="userComment" value={userComment} onChange={onChange}
            style={{width:"93%", height:'100px', marginTop:'2em', paddingBottom:'1em', marginLeft:"0.5em"}}/>
            <div>
                <input type='submit' 
                value='Post'
                className='btn btn-primary btn-block' style={{width:"30%", marginTop:'-1em', marginLeft:"0.5"}}/>
            </div>
        </form>
    )
}

export default CommentForm;
