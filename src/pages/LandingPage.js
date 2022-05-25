import React, { Component } from 'react';
import Header from '../header';
import Slider from '../slider';
import Getstarted from '../getstarted';
import Map from '../Map';
import Footer from '../footer';




class LandingPage extends Component {
    render() { 
        return (
            <div>
                <Header/>

  
<Getstarted/> 


<Slider/>

<Map/>
<Footer/>



            </div>
        );
    }
}
 
export default LandingPage;
