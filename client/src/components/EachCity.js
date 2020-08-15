import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
const EachCity = ({city: {name,tag, link, pic}}) => {
     
    return (
        <Fragment>
        <div className="card " style={{width:'455px', margin:'0.8em', backgroundColor:"silver"}}>
            <div>
                <img src={pic} alt="city" style={{width:'100%', height:'105%', margin:'0em'}} />
            </div>
            <div className="card-body" style={{paddingTop:"5em"}}>
                <h2 class="card-title">{name}</h2>
                <h5>{tag}</h5>
                
                <Link to={link} class="btn btn-primary">More</Link>
            </div>
        </div>
    </Fragment>
    )
}
   
EachCity.propTypes = {
    city: PropTypes.object.isRequired,
}

export default EachCity