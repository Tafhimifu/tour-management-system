import React from 'react';
import { Card, Button} from 'react-bootstrap';
import './PlacesData.css';
import {
  Link
} from "react-router-dom";


const PlacesData = (props) => {
    const {name,situated,img1} = props.places;

    return (
   <div >
     
    <Card className="d-flex align-items-center card-contain" >
    <Card.Img variant="top"  className="place-image"  src={img1} />
    <Card.Body>
      <Card.Title>  {name}</Card.Title>
      </Card.Body>
    <Card.Footer>
      {situated} 
       <br/>
    <Link to={"/place/"+name}> See more...</Link>
    </Card.Footer>
    
    </Card>
   
    </div>
       
    );
};

export default PlacesData;