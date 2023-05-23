import React, { useState, useRef } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Style from "./Signup.module.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';
import { AuthActions } from '../Redux Store/Authentication';


function SignUp() {
    const [validated, setValidated] = useState(false);
    const [matchPaaword, NotMatchPassWord] = useState(false)
    const [InvalidCredetial,setInvalidCredetial] = useState(false)
    const [Loader, SetLoader] = useState(false)
    const [Login, SetisLogin] = useState(true)


    const Dispatch = useDispatch()
    const redirect = useHistory()

    const getEmail = useRef()
    const getPassWord = useRef()
    const getConfirmPassWord = useRef()

    function DontHaveAcHandler(e) {
        e.preventDefault()
        SetisLogin(prevStae => !prevStae)
    }

    async function SignUpHandeler(event) {
        event.preventDefault()
        NotMatchPassWord(false)
        setInvalidCredetial(false)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true)
            return
        }
        if (getPassWord.current.value !== getConfirmPassWord.current.value) {
            setInvalidCredetial(true)
            console.log("sdfsguygu")
            return
        }
        SetLoader(true)
        try {
            const Response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBh3udI3xsO6YmhgGzLlQffg9FSmZcF_zI", {
                email: getEmail.current.value,
                password: getPassWord.current.value,
                returnSecureToken: true
            },
                { headers: { "Content-Type": "application/json" } } 
            )
            if (Response.status === 200) {
                alert("Successfully Sign Up")
                SetLoader(false)
            }
        } catch (error) {
            if (error.response.status === 400) {
                setInvalidCredetial(true)
                SetLoader(false)
            }

        }
    }

    async function LoginHandler(event) {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true)
            return
        }
        try {
            SetLoader(true)
            const Response = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBh3udI3xsO6YmhgGzLlQffg9FSmZcF_zI", {
                email: getEmail.current.value,
                password: getPassWord.current.value,
                returnSecreToken: true
            },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            if (Response.status === 200) {
                Dispatch(AuthActions.Login(Response.data.idToken))
                localStorage.setItem("Email", Response.data.email)
                localStorage.setItem("TokenID", Response.data.idToken)
                redirect.replace("/home")
                alert("Successfully login")
                SetLoader(false)
            }
        } catch (error) {
            console.log(error)
            alert("Invalid Credentials")
            SetLoader(false)
        }

    }



    return (
        <Container className={`mt-5 p-5 ${Style.Container}`}>
            <Form noValidate validated={validated} onSubmit={Login ? SignUpHandeler : LoginHandler}>
                <h2>{Login ? "Sign Up" : "Login"}</h2>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <InputGroup >
                            <Form.Control
                                type="email"
                                placeholder="email"
                                ref={getEmail}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                {InvalidCredetial && <Alert className='p-1' variant='danger'>Email already exist....!</Alert>}
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="password"
                                placeholder="password"
                                minLength={8}
                                ref={getPassWord}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                {Login && <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Confirm Password</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="password"
                                placeholder="confirm password"
                                minLength={8}
                                ref={getConfirmPassWord}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter confirm password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>}
                {matchPaaword && <Alert className='p-1' variant='danger'>Password does not match</Alert>}
                <Stack className="mb-3">
                    {Loader ? <Spinner variant='primary' /> : <Button className="mb-3" type="submit">{Login?"SignUp":"Login"}</Button>}
                    {!Loader && <Button className="mb-3" variant='outline-danger' onClick={DontHaveAcHandler}>{Login ? "Already have account" : "Don't have account"}</Button>}
                </Stack>

            </Form>
        </Container>
    );
}

export default SignUp;