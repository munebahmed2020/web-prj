import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./postrequest.css";
import { useNavigate } from "react-router";
import { AddQuery } from "./api";
import {useState} from 'react'


const Login = () => {
  const navigate = useNavigate();

  const [QueryPost, setQueryPost] = useState();
  const [QuerySalary, setQuerySalary] = useState();
  const [QueryDescription, setQueryDescription] = useState();
  const [QueryNumber, setQueryNumber] = useState();

  const AddQueryy = async () => {
    const QueryData = { QueryPost: QueryPost,QueryDescription: QueryDescription,QuerySalary: QuerySalary, QueryNumber: QueryNumber};
    alert(" Query Submitted")
    await AddQuery(QueryData);
  };
  return (
    <div className="container">
     <h1>Post Your Query</h1>
     <form>
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
      <label className="mb-2"> Query Number</label>
      <input
        className="form-control mb-3"
        type="number"
        name="QueryNumber"
        onChange={(e) => setQueryNumber(e.target.value)}
        placeholder="Rewrite Query Description"
        
      ></input>
        </form>

        <button onClick={AddQueryy}> Add This Query </button>

                  {/* <div className="alert alert-success mt-3">
                    Thank for your connecting with us. Here's what we got from
                    you !
                  </div>
                  <ul className="list-group">
                    <li className="list-group-item">Email: {values.email}</li>
                  </ul>
                </div> */}
        
     
    </div>
  );
};

export default Login;
