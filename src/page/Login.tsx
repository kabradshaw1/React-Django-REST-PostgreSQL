import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigation } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function Login() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigation();

  const handleLogin = (email: string, password: string) => {
    
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      handleLogin(values.email, values.password);
    },
    validationSchema: Yup.object({
      email: Yup.string().trim().required("Le nom d'utilisateur est requis"),
      password: Yup.string().trim().required("Le mot de passe est requis"),
    }),
  });

  return (
    <Form className='bg-secondary' onSubmit={formik.handleSubmit}>    
      <Form.Label><h3>Log in to your account 🔐</h3></Form.Label>
      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} type='email' placeholder='Enter email'/>
      </Form.Group>
      {formik.errors.email ? <Alert>{formik.errors.email} </Alert> : null}
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control id='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} type='password' placeholder='Enter password'/>
      </Form.Group>
      {formik.errors.password ? (
        <Alert>{formik.errors.password} </Alert>
      ) : null}
      <Alert dismissible variant="danger" hidden={false}>{message}</Alert>
      <Button variant="primary" type="submit" disabled={loading}>
        Login
      </Button>
    </Form>
  )
}

export default Login