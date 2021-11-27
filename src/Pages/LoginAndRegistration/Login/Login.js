import React, { useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../Hook/useAuth';
import './Login.css'
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGogle(location, history)
    }
    return (
        <div className="background">

            <div className="container">
                <div className="login-box">
                    <div className="row">
                        <div className="col-md-6 login-left">



                            <h2> Login Hear</h2>
                            <Form onSubmit={handleLoginSubmit} className="my-5">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                        <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" />
                                    </InputGroup>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                        <Form.Control type="password" name="password" onChange={handleOnChange} placeholder="Password" />
                                    </InputGroup>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                                <Link to="/registerd"><Button variant="text">
                                    New User
                                </Button></Link>
                                <p>================</p>
                                <Button onClick={handleGoogleSignIn} variant="primary" >
                                    Google Sign In
                                </Button>
                            </Form>
                            {isLoading && <Spinner animation="border" variant="danger" />}
                            {user?.email && <Alert variant="success">
                                User Created Successfully
                            </Alert>}
                            {authError && <Alert variant="danger">
                                {authError}
                            </Alert>}

                        </div>
                        <div className="col-md-6 login-right">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;