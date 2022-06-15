import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './register.css'
import { useNavigate } from "react-router";
import { addForm3 } from "./api";
import img12 from './images/img12.jpg';
const ValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Full Name is required"),

    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    phone: Yup.number()
        .integer("Password must be 11 characters and not Letters")
        .required("Phone is required"),
    gender: Yup.string()
        .required("Select Your Gender"),
    password: Yup.string()
    .required("Password is required"),
   


});

const Register = () => {
    const navigate = useNavigate();

    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik

                        initialValues={{ name: "", email: "", phone: "", gender: "",password: "",}}
                        validationSchema={ValidationSchema}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 100));
                            console.log(values);
                            const handleForm = async () => {
                                await addForm3(values)
                              }
                              handleForm();
                            navigate("/show4", { state: values });
                        }}
                    >
                        {({ touched, errors, isSubmitting, values }) =>
                            !isSubmitting ? (
                                <div>
                                    <div className="row mb-5">
                                        <div className="row">
                                            <div>
                                                <p id='form-p1' style={{ color: "#ea2425;" }}>Register</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <Form>
                                        <div className="form-group " >

                                            <Field
                                                id="input-1"
                                                type="text"
                                                name="name"
                                                placeholder="Full Name"
                                                className={`mt-4
						${touched.name && errors.name ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="name"
                                                className="invalid-feedback"
                                            />
                                        </div>


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
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                className={`mt-4
						${touched.phone && errors.phone
                                                        ? "is-invalid"
                                                        : ""
                                                    }`}
                                            />
                                            <ErrorMessage
                                                component="div"
                                                name="phone"
                                                className="invalid-feedback"
                                            />
                                        </div>

    

                                        

                                        

                                        <div>
                                            <p id='form-p9' className={`mt-4 
						${touched.gender && errors.gender
                                                    ? "is-invalid"
                                                    : ""
                                                }`}>Gender:
                                                <br />
                                                
                                                
                                                
                                                <Field type="radio" name="gender" id="Male" value="male" />
                                                <label id='l-male' htmlFor="Male">Male</label>
                                                <Field type="radio" name="gender" id="female" value="female" />
                                                <label id='l-male' htmlFor="female">Female</label>
                                            </p>
                                            <ErrorMessage
                                                component="div"
                                                name="gender"
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
${touched.password && errors.password
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
                                            Register
                                        </button>
                                        <img id='p5' src={img12}></img>
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
                                        <li className="list-group-item">
                                            Full Name: {values.name}
                                        </li>
                                        <li className="list-group-item">
                                            Phone: {values.phone}
                                        </li>
                                     
                                        <li className="list-group-item">
                                            Gender: {values.gender}
                                        </li>
                                      
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

export default Register;
