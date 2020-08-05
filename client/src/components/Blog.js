import React from 'react'
import MyCities from './MyCities'

const Gallery = () => {
    return (
        <div>
            <div>
                <h2 style={{fontFamily:'sans', fontWeight:'bolder'}}><center>Gallery</center></h2>
                <h5><center>Take a look on what's on offer, and explore!</center></h5>
            </div>
            <div style={{marginTop:'8em'}}>
            <MyCities/>
            </div>
        </div>
    )
}

export default Gallery;