import React from 'react';
import { useLocation } from 'react-router-dom';

function Show3() {
    const location = useLocation();
    const { image,title,text } = location.state;
    return(
        <div>
            <img src={image} alt={""}/>
            <h1>{title}</h1>
            <h2>{text}</h2>    
        </div>
    );
}

export default Show3;