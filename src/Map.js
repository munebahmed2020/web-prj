import React, { Component } from 'react';
import './locate.css'
function Map() {
    return (
      <div id='locatediv'>
        <div className="map_section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13610.909631659264!2d74.2766072!3d31.476683949999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919023103af0bf3%3A0xc69a4d92168bdf89!2sDoctors%20Hospital%20%26%20Medical%20Center!5e0!3m2!1sen!2s!4v1654275988200!5m2!1sen!2s"
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
<button id='t2'>Locate Us!</button>
      </div>
      </div>
      
    );
  }
  
  export default Map;









  