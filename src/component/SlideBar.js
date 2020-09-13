import React,{ useState }from 'react';
import {Carousel } from 'react-bootstrap';
import mockImage from './slide';
import './SlideBar.css';

const SlideBar = () => {
    const [image,setImage] = useState(mockImage);
    return (
  <div>
        
  <Carousel interval={1500} >
  
  {
    image.map(img => <Carousel.Item >
      <img
        className="d-block w-100 carousel-item"
        src={img.image}
        alt=""
      />
  </Carousel.Item>)
  }
  
</Carousel>
<h2 className="d-flex align-items-center">Sites</h2>

</div>


    );
};

export default SlideBar;