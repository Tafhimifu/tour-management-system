import React, { useState } from 'react';
import './GuideServicesFetch.css'

import { CardDeck} from 'react-bootstrap';
import guideData from '../mockData/guide';
import GuideServices from './GuideServices';
 
const GuideServicesFetch = () => {
    const[guide,setGuide] = useState(guideData);
    return (
        <div>
            
            <div className="guide"> <h3> Our guides</h3></div> 
          <div> <CardDeck className="d-flex justify-content-around">
           
           {
               guide.map(guides=> <GuideServices guides={guides}></GuideServices>)
           }
        
     </CardDeck> </div>
        </div>
    );
};

export default GuideServicesFetch;