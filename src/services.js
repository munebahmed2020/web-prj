import React, { Component } from 'react';
import "./services.css";
import {Link} from 'react-router-dom';
import img8 from './images/img8.jpg';

class Services  extends Component {
   
    render() { 
        return (
<div>

<div> 



<img src={img8} style={{width:'100%', height:'600px', marginBottom:'-200px'}}/>
</div>

           <div className='cards'>
              <div > <Link to='/signup' > <button id='c1' ><i  id='i1' className="bi bi-file-text"></i> 
             <p id='itext1' style={{fontFamily:"poppins"}}> Carrier Setup</p></button></Link>
               </div>
               <div > <Link to='/signup' > <button id='c2' ><i  id='i2' className="bi bi-cash-coin"></i> 
             <p id='itext2'style={{fontFamily:"poppins"}}> Top Paying Loads</p></button></Link>
               </div>
               <div > <Link to='/signup' > <button id='c3' ><i  id='i3' className="bi bi-geo-alt-fill"></i> 
             <p id='itext3'style={{fontFamily:"poppins"}}> Route Planning</p></button></Link>
               </div>
         
               <div > <Link to='/signup' > <button id='c4' ><i  id='i4' className="bi bi-telephone-outbound-fill"></i> 
             <p id='itext4'style={{fontFamily:"poppins"}}> 24/7 Helpline</p></button></Link>
               </div>
               </div>
         

               </div>


        );
    }
}
 
export default Services;