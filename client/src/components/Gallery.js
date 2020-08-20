import React, { Fragment } from 'react'
import MyCities from './MyCities'
import Comments from './comments/Comments'
import CommentForm from './comments/CommentForm'

const Gallery = () => {
    return (
        <Fragment>
            <div style={{marginTop:"1.5em"}}>
                <h2 style={{fontFamily:'sans', fontWeight:'bolder'}}><center>Gallery</center></h2>
                <h5><center>Take a look on what's on offer, and explore!</center></h5>
            </div>
            <div style={{ backgroundImage:'url(https://static.fishingbooker.com/public/images/report/8857/public/da4e44a0ad771dd2bc888e30e9175538.jpg)',marginLeft:"10em", marginTop:'2em', paddingTop:'0.5em', width:'75%', backgroundAttachment:'fixed'}}>
                <div class="card-deck" style={{paddingTop:'0em', width:'90%',marginLeft:"4em"}}>
                    <div class="card" style={{backgroundColor:'transparent',marginTop:'-1em'}}>
                        <div style={{width:'100%', paddingLeft:'-1em'}}>
                            <MyCities/>
                        </div>
                    </div>
                </div>
                <div style={{width:'75%',margin:'10em',marginBottom:'20em',marginTop:'2em',padding:'0.5em', backgroundColor:'white', opacity:'.8'}}>
                    <Comments/>
                    <CommentForm/>
                </div>
            </div>
        </Fragment>
        
    )
}

export default Gallery;