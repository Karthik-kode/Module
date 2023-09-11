import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import axios from "axios"



const bcrypt = require('bcryptjs');

export default function Signup() {
    const Navigate = useNavigate();
    const[pass, setPass] = useState('')

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const initialValues = {
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    };


    //Handlling Submit module

    const handleSubmit = async (values, {resetForm}) => {
  
        let genPass;
        //encrypting password before sending into database
          let passConv = await bcrypt.hash(values.password,5).then((d)=>{
            genPass = d
        }).catch((err)=>{
            console.log(err)
        });
        


        
        console.log(genPass)

        //Passing the field values into the server

        const res = await axios.post('http://localhost:3001/api/saveData',{
    
            name : values.name,
            username: values.username,
            email : values.email,
            password : genPass
            
        }).then((e)=>{
            return e
            // console.log("results",e)
        }).catch((err)=>{
            return err
            // console.log(err.response.data)
        })

        if(res.status == 200){
            Navigate('/')
        }else{
            toast.error('Error Notification !', {
                position: toast.POSITION.TOP_CENTER
            });
        }


    }


    return (
        <>
            <div className="containers">
                <div className="home-page">
                <div className="own-card">
                <h2>Create a New Account</h2>
                <br/>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >

                    <Form className="data">
                        <div className="disp">
                            <div>
                                {/* <label>Name:</label> */}
                            <Field type="text" name="name" className="in-f" placeholder="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                            </div>
                        
                            <div>
                                {/* <label>Username:</label> */}
                            <Field type="text" name="username" className="in-f" placeholder="Username"/>
                            <ErrorMessage name="username" component="div" className="error" />
                            </div>
                        </div><br/>
                        <div>
                            {/* <label>Email:</label> */}
                            <Field type="email" name="email" className="in-f" placeholder="Email"/>
                            <ErrorMessage name="email" component="div" className="error" />
                        </div><br/>
                        <div className="disp">
                           <div>
                             {/* <label>Password:</label> */}
                             <Field type="password" name="password" className="in-f"  placeholder="Password"/>
                            <ErrorMessage name="password" component="div" className="error" />
                           </div>
                        
                            <div>
                                {/* <label>Confirm Password:</label> */}
                            <Field type="password" name="confirmPassword" className="in-f" placeholder="Confirm Password" />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="error"
                            />
                            </div>
                        </div><br/>
                        <div className="buton">
                            <button type="submit" className="btn in-f" >Signup</button>
                        </div>
                        <hr/>
                        <h5> Already have an Account ? <Link to={'/'} className="link"> Login </Link></h5>
                        
                    </Form>
                </Formik>
                </div>
                </div>
            </div>
        </>
    )
}