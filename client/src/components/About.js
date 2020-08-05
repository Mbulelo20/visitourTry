import React from 'react'
import {Grid, Cell} from 'react-mdl'
const About = () => {
    return (
        <div  style={{backgroundImage:")"}}>
            
            <h1 style={{marginTop:"2em"}}><center>About visitour</center></h1>
            <div className="row" style={{marginTop:"3em"}}>
                <div class="col-sm" style={{backgroundColor:'grey'}}>
                    <center>
                        <h1>visitour</h1>
                        <h4>Visitour is here to bring you all the amazing places the world you haven't seen, and have seen,
                            right from your screen. 
                            <br/>
                            With the aim of marketing marketing and uplifting communities, <br/>
                            visitour allows you to view amazing pictures of different places, get travel advice, interact with other users <br/>
                            and share all your amazing experiences
                        </h4>
                    </center>
                </div>
                <div className="col-sm">
                    <img src="https://blogs-images.forbes.com/erikkain/files/2017/11/aco.jpg" alt="img" style={{width:'100%'}}/>
                </div>
                <div className="col-sm">
                    <img src="https://www.fodors.com/assets/destinations/705529/eiffel-tower-paris-france_main.jpg" alt="img"style={{width:'100%'}}/>
                </div>
            </div>
        </div>
    )
}

export default About;