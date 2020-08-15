import React, {useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'

const Homep = () => {
    return (
        <div class="container-fluid" style={{backgroundColor:'lightgrey', marginTop:'5em', width:'80%'}}>
             <div>
                <h1 style={{fontFamily:"fantasy", fontWeight:'bold', color:'blue'}}>
                    <center>visitour</center>
                </h1>
            </div>
            
            <div class="row" style={{paddingTop:'3em'}}>
                <div class="col-sm" ><img src="https://cdn.theculturetrip.com/wp-content/uploads/2016/10/screen-shot-2016-11-08-at-3-03-12-pm-650x489.png" alt="place" style={{height:'100%', width:'100%'}}/></div>
                <div class="col-sm"><img src="https://pbs.twimg.com/profile_images/902433990161965056/werCT6VC.jpg" alt="place" style={{height:'100%', width:'100%'}}/></div>
                <div class="col-sm"><img src="https://www.nationsonline.org/gallery/Japan/Fuji-from-Kawaguchiko.jpg" alt="place" style={{height:'100%', width:'100%'}}/></div>
                <div class="col-sm"><img src="https://www.africansafariandgolftours.co.za/media/cache/cc/68/cc6851bc63efd68acfca3be83918b60c.jpg" alt="place" style={{height:'100%', width:'100%'}}/></div>
                <div class="col-sm"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqlh8c3Km2QGl2QBwMcvU4cJRE1YkGz31ung&usqp=CAU" alt="place" style={{height:'100%', width:'100%'}}/></div>
                <div class="col-sm"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnB5IlMGitqz2bMr0vzcGPQ2sR3HFc3WkzSA&usqp=CAU" alt="place" style={{height:'100%', width:'100%'}}/></div>
            </div>   
            <div class="row" style={{paddingTop:'3em'}}>
                <div style={{fontFamily:'sans'}}>
                    <center>
                        <h1>Welcome!</h1>
                        <p>
                            <h4>
                                Visitour is here, to give you ideas on where you could visit.s
                                Sign in, or register for free, and you'll get to view cool information about where <br/>
                                you might want visit next, and post comments and interact with other users.
                            </h4>
                        </p>
                    </center>
                </div>
            </div>
        </div>
    )
}
export default Homep;

