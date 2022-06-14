import React, { Component } from 'react';
import Header from '../header';
import Dispatchers from '../dispatchers';
import Footer from '../footer';
import PostRequest from '../PostRequest';
class DispatchersPage extends Component {
    
    render() { 
        return (
         <div>
<Header/>
<Dispatchers/>
<PostRequest/>
<Footer/>



         </div>
            
           
           
            
            
            

        );
    }
}
 
export default DispatchersPage;