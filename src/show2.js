import React from "react";
import { useLocation } from "react-router-dom";
import './show2.css'

function Show2() {
  let location = useLocation();
  let data = location.state;
  console.log(location.state);

  return (
    <div>
      
      <div id="show-div-1">
        <h1 id="show-h1" className="p-3 mt-5">Query Sent</h1>

        <div className="alert alert-success mt-3">
          Thank for your connecting with us. Here's what we got from you !
        </div>
        <ul className="list-group">
        <li className="list-group-item">Name: {data.name}</li>
          <li className="list-group-item">Email: {data.email}</li>
          <li className="list-group-item">Gender: {data.gender}</li>
          <li className="list-group-item">Truck: {data.truck}</li>
          <li className="list-group-item">PowerUnits: {data.prname}</li>
          
        </ul>
      </div>
      
    </div>
  );
}
export default Show2;
