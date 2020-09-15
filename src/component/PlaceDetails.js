import React from 'react';
import './PlaceDetails.css';
import { Card,CardDeck} from 'react-bootstrap';



const PlaceDetails = (props) => {
    const {name,situated,details,Road,img1,img2,img3,img4,img5,img6} =props.place;
  
    return (
        <div>
          <div><h2>{name}</h2>
          <h5>{situated}</h5>
          <p>{details}</p>
          <p>{Road}</p></div>
          <div >
            <CardDeck >
          <Card className="image-card">
            <Card.Img className="image" src={img1} />
          </Card>
          <Card className="image-card">
            <Card.Img className="image" src={img2} />
          </Card>
          <Card className="image-card">
            <Card.Img  className="image" src={img3} />
          </Card>
          </CardDeck>
          <br/>
          <CardDeck>
          <Card className="image-card">
            <Card.Img  className="image" src={img4} />
          </Card>
          <Card className="image-card">
            <Card.Img  className="image" src={img5} />
          </Card>
          <Card className="image-card">
            <Card.Img  className="image" src={img6} />
          </Card>
          </CardDeck></div>
          
        </div>
    );
};

export default PlaceDetails;