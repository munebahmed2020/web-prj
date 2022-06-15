import React, { Component } from 'react';
import './locate.css'
function Map() {
    return (
      <div id='locatediv'>
        <div className="map_section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112492.90505115705!2d-82.39470840299529!3d28.225436760520473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b0ddf8a16433%3A0xeffd9fcf6db33e5a!2sWesley%20Chapel%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1655252350607!5m2!1sen!2s"
          width="650"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div id='tdiv'>
<button id='b3' style={{fontFamily:"poppins"}} > Locate Us!</button>
      </div>
      </div>
      
    );
  }
  
  export default Map;









  