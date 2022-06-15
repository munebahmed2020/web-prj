import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './login.css';
import { useNavigate } from "react-router";
import { addForm2 } from "./api";
import img10 from './images/img10.jpg';

const ValidationSchema = Yup.object().shape({

    email: Yup.string() .required("Email is required"),
    password: Yup.string()  .required("Password is required"),

});

const Login = () => {
    const navigate = useNavigate();

    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik

                        initialValues={{email: "", password: "", }}
                        validationSchema={ValidationSchema}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 100));
                            console.log(values);
                            const handleForm = async () => {
                                await addForm2(values)
                              }
                              handleForm();
                            navigate("/show", { state: values });
                        }}
                    >
                        {({ touched, errors, isSubmitting, values }) =>
                            !isSubmitting ? (
                                <div>
                                    
                                    <div className="row mb-5">
                                        <div className="row">
                                            <div>
                                                <p id='form-p1' style={{ color: "#aed1ce" }}>Login</p>
                                                <p id='form-p2'></p>
                                            </div>
                                        </div>
                                    </div>
                                    <Form>
                                        

                                        <div className="form-group">
                                        
                                            <Field
                                                id="input-1"
                                                type="email"
                                                name="email"
                                                placeholder="Enter email"
                                                autocomplete="off"
                                                className={`mt-4 
						${touched.email && errors.email ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="email"
                                                className="invalid-feedback"
                                            />
                                        </div>


                                        <div  className="form-group">
                                        
                                            <Field 
                                                id="input-1"
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className={`mt-4 
						${touched.phone && errors.phone
                                                        ? "is-invalid"
                                                        : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="password"
                                                className="invalid-feedback"
                                            />
                                        </div>



                                        <button
                                            id='submit-form'
                                            type="submit"
                                            
                                        >
                                           Login
                                        </button>
                                        <img id='p4' src={img10}></img>
                                    </Form>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="p-3 mt-5">Query Sent</h1>

                                    <div className="alert alert-success mt-3">
                                        Thank for your connecting with us. Here's what we got from
                                        you !
                                    </div>
                                    <ul className="list-group">
                                        <li className="list-group-item">Email: {values.email}</li>
                                    </ul>

                                </div>

                            )
                        }
                    </Formik>
                </div>

            </div>
        </div>
    );
}

export default Login;
