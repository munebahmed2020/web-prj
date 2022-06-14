import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import { useNavigate } from "react-router";
import { addForm } from "./api";

const ValidationSchema = Yup.object().shape({
  post: Yup.string().required("Post is required"),
  salary: Yup.string().required("Salary is required"),
  des: Yup.string().required("Descirption is required"),
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{ post: "", salary: "", des: "" }}
            validationSchema={ValidationSchema}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 100));
              console.log(values);
              const handleForm = async () => {
                await addForm(values)
              }
              handleForm();
              navigate("/show5", { state: values });
            }}
          >
            {({ touched, errors, isSubmitting, values }) =>
              !isSubmitting ? (
                <div>
                  <div className="row mb-5">
                    <div className="row">
                      <div>
                        <p id="form-p1" style={{ color: "#aed1ce" }}>
                          Post Your Request!
                        </p>
                        <p id="form-p2"></p>
                      </div>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group">
                      <Field
                        id="input-1"
                        type="text"
                        name="post"
                        placeholder="Enter your required post"
                        autocomplete="off"
                        className={`mt-2 form-control
						${touched.post && errors.post ? "is-invalid" : ""}`}
                      />

                      <ErrorMessage
                        component="div"
                        name="post"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <Field
                        id="input-1"
                        type="text"
                        name="salary"
                        placeholder="Enter Your Offered Salary"
                        className={`mt-2 form-control
						${touched.salary && errors.salary ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="salary"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <Field
                        id="input-1"
                        type="text"
                        name="des"
                        placeholder="Please describe in detail"
                        className={`mt-2 form-control
${touched.des && errors.des ? "is-invalid" : ""}`}
                      />
                      <ErrorMessage
                        component="div"
                        name="des"
                        className="invalid-feedback"
                      />
                    </div>

                    <button
                      id="submit-form"
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Post
                    </button>
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
};

export default Login;
