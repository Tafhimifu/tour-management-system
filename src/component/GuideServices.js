 import React from 'react';

import { Card } from 'react-bootstrap';
import './GuideServices.css';


const GuideServices = (props) => {
    const {name,img,AvailableDay} = props.guides;
    
    return (
        
           <div> 
                
                
                              <Card className="guide-contain">
                              <Card.Img variant="top"  className="guide-image"  src={img} />
                              <Card.Body>
                              {name}
                              </Card.Body>
                              
                               <Card.Footer>
                    
                              <h6>Available Day :  {AvailableDay}</h6>
                   
                           </Card.Footer>
                  
                              </Card>
            
                          
              </div>
            
    
    );
};

export default GuideServices;