import React, { useState } from 'react';
import mockData from '../mockData/places';
import { CardDeck} from 'react-bootstrap';
import PlacesData from './PlacesData';


const PlaceFetch = () => {
    const[place,setPlace] = useState(mockData);
    return (
        <CardDeck className="d-flex justify-content-around">
           
            {
                place.map(places=> <PlacesData places={places}></PlacesData>)
            }
         
      </CardDeck>
      
    );
};

export default PlaceFetch;