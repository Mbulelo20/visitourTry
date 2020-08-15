import React, { Fragment } from 'react'
import MyCities from './MyCities'
import Comments from './comments/Comments'
import CommentForm from './comments/CommentForm'

const Gallery = () => {
    return (
        <Fragment>
            <div class="card bg-primary">
                <h2 style={{fontFamily:'sans', fontWeight:'bolder'}}><center>Gallery</center></h2>
                <h5><center>Take a look on what's on offer, and explore!</center></h5>
            </div>
            <div class="card-deck" style={{paddingTop:'5em'}}>
                <div class="card" >
                    <div style={{width:'20%', paddingLeft:'-1em'}}>
                        <MyCities/>
                    </div>
                </div>
                <div style={{width:'30%', backgroundColor:'white'}}>
                    <CommentForm/>
                    <Comments/>
                </div>
            </div>
        </Fragment>
        
    )
}

export default Gallery;