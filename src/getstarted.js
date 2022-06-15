import React, { Component } from 'react';
import img4 from './images/img4.jpg';
import {Link} from 'react-router-dom';
import './getstarted.css';
import './bgvid.css';
import bg from './images/bg1.mp4';

class Getstarted extends Component {
    
    render() { 
        return (

<div className='row'>
            <div className='row-md-12' style={{position:"relative", zIndex:"1",marginBottom:"400px"}
            }>
                
            <video autoPlay loop muted id='bg1'>
                <source src={bg} type='video/mp4'></source>
            </video>
           
            



            </div>
          
              

        </div>


        );
    }
}
 
export default Getstarted;