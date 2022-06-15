import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

class Slider extends Component {
    
    render() { 
        return (
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      height="600px"
      width="100%"
    />
    <Carousel.Caption style={{fontSize:"400%",fontFamily:"poppins"}}>
    Welcome to Dispatch Experts Group LLC
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      height="600px"
      width="100%"
    />

    <Carousel.Caption style={{fontSize:"400%",fontFamily:"poppins"}}>
    Welcome to Dispatch Experts Group LLC
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      height="600px"
      width="100%"
    />

    <Carousel.Caption style={{fontSize:"400%",fontFamily:"poppins"}}>
    Welcome to Dispatch Experts Group LLC
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



        );
    }
}
 
export default Slider ;