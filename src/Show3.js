import React from 'react';
import { useLocation } from 'react-router-dom';

function Show3() {
    const location = useLocation();
    const { image,title,text } = location.state;
    return(
        <div>
            <img src={image} alt={""}/>
            <h1>{title}</h1>
            <h1>{text}</h1>    
        </div>
    );
}

export default Show3;