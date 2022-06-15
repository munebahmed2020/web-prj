import React, { Component } from 'react';
import Services from '../services';
import Header from '../header';
import Footer from '../footer';


class ServicesPage extends Component {
    
    render() { 
        return (
            <div>
                 <Header/>
                 
                 
                <Services/>
                <Footer/>

            </div>
        );
    }
}
 
export default ServicesPage;