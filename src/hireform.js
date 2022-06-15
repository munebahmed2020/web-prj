
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './hireform.css'
import { useNavigate } from "react-router";
import { addForm4 } from "./api";

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
   


});

const Hireform = () => {
    const navigate = useNavigate();

    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Formik

                        initialValues={{ name: "", email: "", phone: "", gender: "",truck: "",salary: "",}}
                        validationSchema={ValidationSchema}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 100));
                            console.log(values);
                            const handleForm = async () => {
                                await addForm4(values)
                              }
                              handleForm();
                            navigate("/show2", { state: values });
                        }}
                    >
                        {({ touched, errors, isSubmitting, values }) =>
                            !isSubmitting ? (
                                <div>
                                    <div className="row mb-5">
                                        <div className="row">
                                            <div>
                                                <p id='form-p12' style={{ color: "#ea2425;" }}>Please Post your details!</p>
                                                <p id='form-p13'>Hire Experienced Dispatcher Today!</p>
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
                                                className={`mt-2 form-control
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
                                                className={`mt-2 form-control
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
                                                className={`mt-2 form-control
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
                                            <p id='form-p3' className={`mt-2 form-control
						${touched.truck && errors.truck
                                                    ? "is-invalid"
                                                    : ""
                                                }`}>Truck:
                                                <br />
                                                
                                                
                                                
                                                <Field type="checkbox" name="truck" id="Dry Van" value="dryvan" />
                                                <label id='l-dryvan' htmlFor="DryVan">DryVan</label>
                                                <Field type="checkbox" name="truck" id="Reefer" value ="reefer"/>
                                                <label id='1-reefer' htmlFor="Reefer">Reefer</label>
                                                <Field type="checkbox" name="truck" id="PowerOnly" value ="poweronly"/>
                                                <label id='1-poweronly' htmlFor="PowerOnly">Power Only</label>

                                            </p>
                                            <ErrorMessage
                                                component="div"
                                                name="truck"
                                                className="invalid-feedback"
                                            />
                                        </div>

                                        <div>
                                            <p id='form-p3' className={`mt-2 form-control
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

                                        <div className="form-group " >

                                            <Field
                                                id="input-1"
                                                type="text"
                                                name="prname"
                                                placeholder="Number of Power Units"
                                                className={`mt-2 form-control
${touched.prname && errors.prname ? "is-invalid" : ""}`}
                                            />

                                            <ErrorMessage
                                                component="div"
                                                name="prname"
                                                className="invalid-feedback"
                                            />
                                        </div>
                                        <div  className="form-group">

<Field 
    id="input-1"
    type="tel"
    name="carrier"
    placeholder="Carrier Name"
    className={`mt-2 form-control
${touched.carrier && errors.carrier
            ? "is-invalid"
            : ""
        }`}
/>
<ErrorMessage
    component="div"
    name="carrier"
    className="invalid-feedback"
/>
</div>



 <div  className="form-group">

<Field 
    id="input-1"
    type="tel"
    name="salary"
    placeholder="Please post your offered salary"
    className={`mt-2 form-control
${touched.salary && errors.salary
            ? "is-invalid"
            : ""
        }`}
/>
<ErrorMessage
    component="div"
    name="salary"
    className="invalid-feedback"
/>
</div>
<div  className="form-group">

<Field 
    id="input-1"
    type="tel"
    name="mcnumber"
    placeholder="MC Number"
    className={`mt-2 form-control
${touched.mcnumber && errors.mcnumber
            ? "is-invalid"
            : ""
        }`}
/>
<ErrorMessage
    component="div"
    name="mcnumber"
    className="invalid-feedback"
/>
</div>











                                        <button
                                            id='submit-form'
                                            type="submit"
                                            className="btn btn-primary btn-block mt-4"
                                        >
                                            Submit
                                        </button>

                                    </Form>
                                </div>
                            ) : (
                                <div>
                                    <h1 className="p-3 mt-5">Our Disatcher Will Contact you!</h1>

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
                                           Truck:{values.truck}
                                        </li>
                                        <li className="list-group-item">
                                            Gender: {values.gender}
                                        </li>
                                        <li className="list-group-item">
                                            Product: {values.product}
                                        </li>
                                        <li className="list-group-item">
                                            PowerUnits: {values.prname}
                                        </li>
                                        <li className="list-group-item">
                                            Carrier: {values.carrier}
                                        </li>
                                        <li className="list-group-item">
                                            Salary: {values.salary}
                                        </li>
                                        <li className="list-group-item">
                                            Mc#: {values.mcnumber}
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

export default Hireform;
