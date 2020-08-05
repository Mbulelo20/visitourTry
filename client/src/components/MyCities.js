import React, { Component } from 'react'
import EachCity from './EachCity'
class MyCities extends Component {
    state = {
        cities: [
            {
                "id": 'cpt',
                "name": "Cape Town",
                "link": "./Capetown",
                "tag":"Featuring beaches, bars, 5-star hotels, and ofcourse its majestic Table Mountain, Cape Town is definitely SA's tourist heartland.",
                "pic": "https://www.planetware.com/photos-large/SAF/south-africa-cape-town-clifton.jpg",
            },
            {
                "id": 'jhb',
                "name": "Johannersburg",
                "link":'./Joburg',
                "tag":"Famous for its gold mines, Joburg is full of political history, entertainment and outdoor activities",
                "pic": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/02/15/12/johannesburg.jpg?w968h681",
            },
            {
                "id": 'slb',
                "name": "Stellenbosch",
                "link": "./Stel",
                "tag":"Natural beauty, sport, education and wine has made the name 'Stellenbosch' resonate around the globe as one of South Africa's premier tourist, wine, business and education centers!",
                "pic": "https://www.planetware.com/photos-large/SAF/south-africa-stellenbosch.jpg",
            },
            {
                "id": 'Dbn',
                "name": "Durban",
                "link": "./Durban",
                "tag":"The curry capital of its country, Imbued with an irresistible vacation atmosphere, Durban is known for the idyllic beaches of the Golden Mile, culture and its world-class surf spots.",
                "pic": "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/03/nelson-mandela-capture-site.jpg",
            },
            {
                "id": 'bloem',
                "name": "Bloemfontein",
                "link": "./Coming",
                "pic": "https://www.planetware.com/photos-large/SAF/south-africa-bloemfontein-fourth-raadsaal.jpg",
            },
            {
                "id": 'kmb',
                "name": "Kimberly",
                "link": "./Coming",
                "pic": "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/03/big-hole.jpg",
            },
            {
                "id": 'pt',
                "name": "Pretoria",
                "link": "./Coming",
                "pic": "https://media-cdn.tripadvisor.com/media/photo-s/07/5e/ed/0e/union-buildings.jpg",
            }
            ,
            {
                "id": 'grah',
                "name": "Grahmstown",
                "link": "./Coming",
                "pic": "https://5ec9970e133d3443e0e9-3c97be73f70c7e9a40a2b30372d7cf17.ssl.cf3.rackcdn.com/rfa_rsa_ec_grahamstown.jpg",
            },
            {
                "id": 'plk',
                "name": "Polokwane",
                "link": "./Coming",
                "pic": "https://www.nightjartravel.com/sites/default/files/169_Regions/169%20Vhembe%201.jpg",
            },
            {
                "id": 'nel',
                "name": "Nelspruit",
                "link": "./Coming",
                "pic": "https://www.co-arc.com/images/mpumalanga/mpumalanga-prev.jpg",
            },
            {
                "id": 'Geo',
                "name": "George",
                "link": "./Coming",
                "pic": "https://www.western-cape-info.com/info/towns/144/images/bottom_images/5.jpg",
            },
            {
                "id": 'rsb',
                "name": "RustenBurg",
                "link": "./Coming",
                "pic": "https://showme.co.za/rustenburg/files/2016/10/Lutheran-Church-Kroondal500.jpg",
            },
            {
                "id": 'kny',
                "name": "Knysna",
                "link": "./Coming",
                "pic": "",
            },
            {
                "id": 'el',
                "name": "East London",
                "link": "./Coming",
                "pic": "http://blog.sa-venues.com/wp-content/uploads/2017/10/hole-in-the-wall.jpg",
            }
        ]
    }
    render() {
        return (
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 2fr'}}>
                {this.state.cities.map(city => (
                    <EachCity key={city.id} city={city} />
                ))}
            </div>
        )
    }
}

export default MyCities;
