import React from "react";
import { useLocation } from "react-router-dom";
import './show.css'

function Show5() {
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
          <li className="list-group-item">Post: {data.post}</li>
          <li className="list-group-item">Salary: {data.salary}</li>
          <li className="list-group-item">Description: {data.des}</li>
        </ul>
      </div>
      
    </div>
  );
}
export default Show5;
