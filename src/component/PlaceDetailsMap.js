import React from 'react';
import { useParams } from 'react-router-dom';
import mockPlace from '../mockData/places';
import PlaceDetails from './PlaceDetails';


const PlaceDetailsMap = () => {
    const {placeName} = useParams();
    const place = mockPlace.find(pl => pl.name === placeName);
    
    return (
        <div>
            <PlaceDetails place={place}></PlaceDetails>
        </div>
    );
};

export default PlaceDetailsMap;