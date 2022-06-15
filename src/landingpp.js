import React, { Component } from 'react';
import img7 from './images/img7.jpg';
import './landingpp.css';
import {Link} from 'react-router-dom';
class FrontPic extends Component {

    render() { 
        return (
        <div id='frontpic'>
        <img src={img7} style={{width:'100%', height:'600px', marginBottom:'-200px'}}/>
        <Link to='/signup'><button id='b2' style={{fontFamily:"poppins"}} >Get Started</button></Link>
        </div>
        );
    }
}
 
export default FrontPic;