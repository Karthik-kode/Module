import React from "react";
import Button from 'react-bootstrap/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();
    const validationSchema = Yup.object().shape({

        username: Yup.string().required('Username is required'),

        password: Yup.string().required('Password is required'),

    });

    const initialValues = {

        username: '',

        password: '',

    };

    // const handleSubmit = (values,{resetForm}) => {
    //     console.log('Form submitted:', values);
    //     resetForm()
    // };

    const handleSubmit = async (values, {resetForm}) => {
        
        // const response = await fetch('https://localhost:3001/api/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(values)
        // });

        const r = await axios.post('http://localhost:3001/api/login',{
            username: values.username,
            password : values.password
        }).then((e)=>{
            // console.log("e",e)
            return e
        }).catch((err)=>{
            console.log(err.r.data)
        })
        resetForm()
        console.log('r' , r)
        if (r.statusText='OK') {
            // const data = await response.json();
            // console.log(response)
          console.log('Login success');
          
          navigate('/dashboard' )
        
        } else {
           
          console.log('Login failed');
        
        }
      };


    return (
        <>
            <div className="containers">
                <div className="home-page">
                <div className="own-card">
                <h2>Login</h2>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >

                    <Form className="data">

                        <div className="disp">
                            <div>
                            {/* <label>Username:</label> */}
                            <Field type="text" name="username" className="in-f" placeholder="Username"/>
                            <ErrorMessage name="username" component="div" className="error" />
                        </div>

                        <div>
                            {/* <label>Password:</label> */}
                            <Field type="password" name="password" className="in-f"  placeholder="Password"/>
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        </div>
                        <br/>
                        <div className="buton">
                            <button type="submit" className="btn in-f">Login</button>
                        </div>
                        <hr/>
                        <h5> Don't have an Account ? <Link to={'/Signup'} className="link"> Signup </Link></h5>
                    </Form>
                </Formik>
            </div>
            </div>
            </div>
        </>
    )
}