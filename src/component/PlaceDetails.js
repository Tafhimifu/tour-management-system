import React from 'react';


const PlaceDetails = (props) => {
    const {name,situated,details,Road,img1,img2,img3} =props.place;
  
    return (
        <div>
          <h2>{name}</h2>
          <p>{details}</p>
          <p>{Road}</p>
          <img src={img1} alt=""/>
          
        </div>
    );
};

export default PlaceDetails;