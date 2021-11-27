import React, { useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import './Registation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faUser, faAt, faFileSignature } from '@fortawesome/free-solid-svg-icons';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const { user, registerUser, signInWithGogle, isLoading, authError } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGogle(location, history)
    }
    return (
        <>
            <div className="registration-background">

                <div className="container">
                    <div className="registration-box">
                        <div className="row">
                            <div className="col-md-6 registration-left">
                                <h1>Registation</h1>
                                {!isLoading &&
                                    <>
                                        <Form onSubmit={handleLoginSubmit} className="my-5">

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faFileSignature} /></InputGroup.Text>
                                                    <Form.Control type="text" name="name" onBlur={handleOnBlur} placeholder="Enter Your Name" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
                                                    <Form.Control type="email" name="email" onBlur={handleOnBlur} placeholder="Enter email" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                                    <Form.Control type="password" name="password" onBlur={handleOnBlur} placeholder="Password" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Text><FontAwesomeIcon icon={faKey} /></InputGroup.Text>
                                                    <Form.Control type="password" name="password2" onBlur={handleOnBlur} placeholder="Re-Type Password" />
                                                </InputGroup>
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                            <Link to="/login"><Button variant="text">
                                                Already Registerd
                                            </Button></Link>
                                        </Form>
                                        <p>================</p>
                                        <Button onClick={handleGoogleSignIn} variant="primary" >
                                            Google Sign In
                                        </Button>
                                    </>
                                }
                                {isLoading && <Spinner animation="border" variant="danger" />}
                                {user?.email && <Alert variant="success">
                                    User Created Successfully
                                </Alert>}
                                {authError && <Alert variant="danger">
                                    {authError}
                                </Alert>}

                            </div>
                            <div className="col-md-6 registration-right">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;