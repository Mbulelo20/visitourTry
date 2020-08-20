import React from 'react'

const CommentItem = ({comment}) => {
    const {userComment} = comment;

    return (
        <div  style={{height:'1em', width:'50%', marginTop:'1em', paddingtop:'20em'}}>
            <h6 style={{paddingtop:'20em', textDecoration:"underline"}}>
                {userComment}{' '}
            </h6>
        </div>
    )
}

export default CommentItem;
