import React, { Fragment } from 'react'
import {Grid} from 'react-mdl'

const Stel = () => {
    return (
        <Fragment>
            <Grid style={{backgroundColor:'lightblue'}}>
                <h1 style={{fontFamily:'sans', fontWeight:'bolder', marginTop:'1em', marginBottom:"1em"}}><center>Stellenbosch</center></h1>
            </Grid>
            <div class="cards" style={{width: "90%", marginBottom:'5em'}}>
                <div class="container" style={{margin:'-1em'}}>
                    <center><h2 class="card-title" style={{fontFamily:'sans serif', fontWeight:'bold'}}> Jonkershoek Nature Reserve</h2></center>
                    <div class="row" >
                        <div class="col-sm" style={{margin:'0em'}}>
                            <img src="https://www.hikingsouthafrica.co.za/wp-content/uploads/jonkershoek-panorama-route-2019-03-21-65-1024x683.jpg" style={{width:'107%', height:'100%'}}/>
                        </div>
                        <div class="col-sm" style={{margin:'0em'}}>
                            <img src="https://www.capetownetc.com/wp-content/uploads/2020/02/c0ea3e498513c5d6e83e45646e3049c0-1024x678.jpg" style={{width:'107%', height:'100%'}}/>
                        </div>
                        <div class="col-sm">
                            <img src="https://ctuat.co.za/wp-content/uploads/2015/07/hike.jpg" style={{width:'107%', height:'110%'}}/>
                        </div>
                        <div class="col-sm">
                            <img src="https://bicyclesouth.co.za/wp-content/uploads/2017/02/Jonkershoek5.jpg" style={{width:'107%', height:'110%'}}/>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <center>
                        <p style={{fontSize:"20px"}} class="card-text">
                            Jonkeshoek is home to the majestic Jonkershoek Mountains, <br/>
                             and forms part of the Jonkershoek valley. 
                             The reserve, which includes the smaller Assegaaibosch Nature Reserve, <br/>
                             lies near the town of Stellenbosch in the south-western Cape.
                        </p>
                        <h3>Attractions:</h3>
                        <ul>
                            <li>Jonkershoek Valley</li>
                            <li>Mountains</li>
                            <li>Assegaaibosch Nature Reserve</li>
                        </ul>  
                    </center>
                </div>
            </div>
            <div class="cards" style={{width: "90%", marginBottom:'5em'}}>
                <div class="container" style={{margin:'-1em'}}>
                    <center><h2 class="card-title" style={{fontFamily:'sans serif', fontWeight:'bold'}}>Boschendal Wine Farm  </h2></center>
                    <div class="row" >
                        <div class="col-sm" style={{margin:'0em'}}>
                            <img src="https://r-cf.bstatic.com/images/hotel/max1280x900/190/190929003.jpg" style={{width:'107%', height:'100%'}}/>
                        </div>
                        <div class="col-sm" style={{margin:'0em'}}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Boschendal.jpg/1200px-Boschendal.jpg" style={{width:'107%', height:'100%'}}/>
                        </div>
                        <div class="col-sm">
                            <img src="https://www.boschendal.com/images/made/images/uploads/Farm_Feast-330-cobie_22_copy_450_450_s_c1.JPG" style={{width:'107%', height:'110%'}}/>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <center>
                        <p style={{fontSize:"20px"}} class="card-text">
                            Boschendal Wine Farm is the oldest maker of wine in SA, with over 300 years of history.<br/>
                            Enjoy the wide variety of wine at this award winning estate, <br/>
                            by going to the wine centre for a tour and wine tasting. 
                            Dine in the Boschendal restaurant or get a picnic basket and laze on the beautiful grounds of the Boschendal Estate.
                        </p>
                        
                    </center>
                </div>
            </div>
            <div class="cards" style={{width: "90%", marginBottom:'5em'}}>
                <div class="container" style={{margin:'-1em'}}>
                    <center><h2 class="card-title" style={{fontFamily:'sans serif', fontWeight:'bold'}}>Rupert Museum </h2></center>
                    <div class="row" >
                        <div class="col-sm" style={{margin:'0em'}}>
                            <img src="https://www.portfoliocollection.com/img/cache/img/uploads/attractions682x512_25697527_rupert-museum_6.jpg?v1455650004" style={{width:'107%', height:'100%'}}/>
                        </div>
                        <div class="col-sm" style={{margin:'0em'}}>
                            <img src="https://lh3.googleusercontent.com/4AchTrxS7BL0l11P63uwdosF0f0mxfzxPwHEIjpgM-2hA_O2cqjB29M0kuxWHDt0w94xUalCt-17zzxpC93H3RE" style={{width:'107%', height:'100%'}}/>
                        </div>
                        <div class="col-sm">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/e6/0a/f8/overall-view-inside-the.jpg" style={{width:'107%', height:'110%'}}/>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <center>
                        <p style={{fontSize:"20px"}} class="card-text">
                        The Rupert Museum houses over 350 works, <br/>
                        and can be regarded as the premier collection of contemporary South African art from the period 1940 to 1970. 
                        The predominant mediums displayed are paintings, sculptures and tapestries. Works include: <br/>
                        Maggie Laubser, Irma Stern, Alexis Preller, Walter Battiss, Elza Dziomba, Jean Welz, JH Pierneef, Lippy Lipshitz <br/>
                        and ofcourse more!
                        </p>
                        <ul>
                            <li></li>
                        </ul>  
                    </center>
                </div>
            </div>
        </Fragment>
    )
}

export default Stel
