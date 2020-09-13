 import React, { useState } from 'react';
import guideData from '../mockData/guide';
import { CardDeck, Card } from 'react-bootstrap';


const GuideServices = () => {
    const[guide,setGuide] = useState(guideData);
    
    return (
        <div>
             <h3> Our guide</h3>
            <CardDeck>
                
  {   guide.map(guides=>
                <Card>
                <Card.Img variant="top"  className="place-image"  src={guides.img} />
    <Card.Body>
      <Card.Title>{guides.name}</Card.Title>
      </Card.Body>
    <Card.Footer>
      
       <br/>
     
    </Card.Footer>
    
                </Card>)
}
            </CardDeck>

            
        </div>
    );
};

export default GuideServices;