import React, { Component } from 'react';
import "./footer.css";
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import {Link} from "react-router-dom";
class Footer extends Component {
    
    render() { 
        return (

<div id='Footer'>
                <div className='row'>
                    <div className='row1' style={{height:'30px', width:'100%'}}>
                    </div>
                    <div className='row-1' style={{height:'60px', width:'100%'}}>
                        
                    </div>
                    <div className='row-2' style={{height:'60px', width:'100%'}}>
                        <p>DISPATCH EXPERTS GROUP LLC</p>
                        
                    </div>
                    <div className='row-3' style={{height:'60px', width:'100%'}}>
                        <Link to='/facebook.com/'><FaFacebook style={{color:'#3B639A',height:'40px', width:'40px', background:'white', borderRadius:'50%', padding:'5px', margin:'10px' }}/></Link>
                        <Link to='/instagram.com'><FaInstagram style={{color:'#20A3EB',height:'40px', width:'40px', background:'white', borderRadius:'50%', padding:'5px', margin:'10px'  }}/> </Link>
                        <Link to='/whatsapp.com'><FaWhatsapp style={{color:'#BE302D',height:'40px', width:'40px', background:'white', borderRadius:'50%', padding:'5px', margin:'10px' }}/> </Link>
                    </div>
                    <div className='row-4' style={{height:'60px', width:'100%'}}>
                        <ul style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                            <li>
                                <Link to="/aboutus" id='menu-list' style={{color:'black', textDecoration:'none', fontFamily:'Poppins', fontSize:'120%', fontWeight: 'boldlight'}}><p>About Us</p></Link>
                            </li>
                            <li>
                                <Link to="/signup" id='menu-list' style={{color:'black', textDecoration:'none', fontFamily:'Poppins', fontSize:'120%', fontWeight: 'boldlight'}}><p>Contact Us</p></Link>
                            </li>
                            <li>
                                <Link to="/terms&privacy" id='menu-list' style={{color:'black', textDecoration:'none', fontFamily:'Poppins', fontSize:'120%', fontWeight: 'boldlight'}}><p>Terms & Privacy</p></Link>
                            </li>
                        </ul>
                    </div>
                    <div className='row-5' style={{height:'60px', width:'100%'}}>

                    </div>
                </div>
               
            </div>
        );
    }
}
 
export default Footer;