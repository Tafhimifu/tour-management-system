import React, { useState } from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import mockRide from '../mockData/ride';


const RideServices = (props) => {
    const[ride,setRide] = useState(mockRide);
    return (
        <div>
            <h2>Our services</h2>
            <h3>Our Ride</h3>
            <CardDeck>
                {

               ride.map(rides=> <Card>
                <Card.Img variant="top"  className="place-image"  src={rides.image} />
    <Card.Body>
      <Card.Title></Card.Title>
      </Card.Body>
    <Card.Footer>
      
       <br/>
     
    </Card.Footer>
    
                </Card>)}
                </CardDeck>

          
            </div>
    );
};

export default RideServices;