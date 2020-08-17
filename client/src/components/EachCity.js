import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const EachCity = ({city: {name,tag, link, pic}}) => {
     
    return (
        <Fragment>
        <div className="card " style={{width:'98.5%', backgroundColor:"white", marginLeft:'0.5em', marginBottom:'1em'}}>
            <div className="row" style={{width:'100%'}} >
                <div class="col-sm">
                    <img src={pic} alt="city" style={{width:'100%', height:'95%', margin:'1em', marginBottom:"1em"}} />
                </div>
                <div class="col-sm">
                    <div className="card-body" style={{paddingTop:"3em"}}>
                        <h2 class="card-title">{name}</h2>
                        <h5>{tag}</h5>
                        <Link to={link} class="btn btn-primary">More</Link>
                    </div>
                </div>
            </div >
        </div>
    </Fragment>
    )
}
   
EachCity.propTypes = {
    city: PropTypes.object.isRequired,
}

export default EachCity