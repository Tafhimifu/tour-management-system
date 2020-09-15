import React, { useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import mockRide from '../mockData/ride';
import './RideServices.css';

const RideServices = (props) => {
    const[ride,setRide] = useState(mockRide);
    return (
        <div>
            <h2>Our services</h2>
            <h3>Our Ride</h3>
            <CardDeck>
                {

               ride.map(rides=> <Card className="ride">
                <Card.Img variant="top"  className="ride-image"  src={rides.image} />
    <Card.Body>
      <Card.Title> {rides.name}</Card.Title>
      </Card.Body>
    
    
                </Card>)}
                </CardDeck>

          
            </div>
    );
};

export default RideServices;