import React, { Component } from 'react';
import "./about.css";
import img5 from './images/img5.jpg';
import {Link} from 'react-router-dom';

class About extends Component {
     
    render() { 
        return (
<div className='about' >

<img id='truck1' src={img5}/>


<div className='a1'> 
<h1 id='t2' style={{fontFamily:"poppins"}}> All About Dispatch Experts Group LLC</h1>
<p id='t3'>Our Background</p>
<p id='t4' style={{fontFamily:"sans-serif"}}>Since our founding, Dispatch Experts Group has been known for quality services, exceptional efficiency and the highest level of professionalism. For your dispatching needs, we guarantee to not only meet, but exceed your expectations and ensure your full satisfaction.</p>
<p id='t5'>Our team is up for every job, managing projects with the skill and experience our clients have come to expect. Please get in touch to learn more about our team, our company or for details about the services we provide.</p>
 <Link to='/signup'><button id='b7' style={{fontFamily:"poppins"}}>Get Started</button></Link>




</div>
</div>




        );
    }
}
 
export default About;