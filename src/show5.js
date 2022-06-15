import React from "react";
import { useLocation } from "react-router-dom";
import './show.css'
import {useState} from 'react';
import {UpdateQuery} from './api'


function Show5() {

  const [QueryPost, setQueryPost] = useState();
  const [QuerySalary, setQuerySalary] = useState();
  const [QueryDescription, setQueryDescription] = useState();
  const [QueryNumber, setQueryNumber] = useState();

  let location = useLocation();
  let data = location.state;
  console.log(location.state);

  const UpdateQueryy = async () => {
    const QueryData = { QueryPost: QueryPost,QueryDescription: QueryDescription,QuerySalary: QuerySalary, QueryNumber: QueryNumber};
    console.log(QueryData);
    await UpdateQuery(QueryData);
  };

  return (
    // <div>
      
    //   <div id="show-div-1">
    //     <h1 id="show-h1" className="p-3 mt-5">Query Sent</h1>

    //     <div className="alert alert-success mt-3">
    //       Thank for your connecting with us. Here's what we got from you !
    //     </div>
    //     <ul className="list-group">
    //       <li className="list-group-item">Post: {data.post}</li>
    //       <li className="list-group-item">Salary: {data.salary}</li>
    //       <li className="list-group-item">Description: {data.des}</li>
    //     </ul>
    //   </div>
      <div>
        <form>
        <label className="mb-2"> Query Number</label>
      <input
        className="form-control mb-3"
        type="number"
        name="QueryNumber"
        onChange={(e) => setQueryNumber(e.target.value)}
        placeholder="Rewrite Query Description"
       
      ></input>
        <label className="mb-2"> Query Post</label>
      <input
        className="form-control mb-3"
        type="text"
        name="querypost"
        onChange={(e) => setQueryPost(e.target.value)}
        placeholder="Rewrite your Post"
        
      ></input>

<label className="mb-2"> Query Salary</label>
      <input
        className="form-control mb-3"
        type="text"
        name="QuerySalary"
        onChange={(e) => setQuerySalary(e.target.value)}
        placeholder="Edit Your Salary"
        
      ></input>
      <label className="mb-2"> Query Description</label>
      <input
        className="form-control mb-3"
        type="text"
        name="QueryDescription"
        onChange={(e) => setQueryDescription(e.target.value)}
        placeholder="Rewrite Query Description"
        
      ></input>
        </form>
        <button onClick={UpdateQueryy}> Update This Query </button>
      </div>
    // </div>
  );
}
export default Show5;
