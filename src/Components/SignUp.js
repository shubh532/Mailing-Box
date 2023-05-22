import React, { useState, useRef } from 'react';
import axios from 'axios';
import Style from "./Navbar.module.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

function SignUp() {
    const [validated, setValidated] = useState(false);
    const [matchPaaword, NotMatchPassWord] = useState(false)
    const [existMail, NotExistmail] = useState(false)
    const [Loader, SetLoader]=useState(false)

    const getEmail = useRef()
    const getPassWord = useRef()
    const getConfirmPassWord = useRef()

    async function SignUpHandeler(event) {
        NotMatchPassWord(false)
        NotExistmail(false)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true)
            return
        }
        if (getPassWord.current.value !== getConfirmPassWord.current.value) {
            NotMatchPassWord(true)
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
                { headers: { "Content-Type": "application/json" } })
            if (Response.status === 200) {
                console.log("User Succefully sign up")
                SetLoader(false)
            }
        } catch (error) {
            if (error.response.status===400){
                NotExistmail(true)
                SetLoader(false)
            }
            
        }
    }



    return (
        <Container className={`mt-5 p-5 ${Style.Container}`}>
            <Form noValidate validated={validated} onSubmit={SignUpHandeler}>
                <h2>Sign Up</h2>
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
                {existMail && <Alert className='p-1' variant='danger'>Email already exist....!</Alert>}
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
                <Row className="mb-3">
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
                </Row>
                {matchPaaword && <Alert className='p-1' variant='danger'>Password does not match</Alert>}
                {Loader?<Spinner variant='primary'/>:<Button type="submit">SignUp</Button>}
            </Form>
        </Container>
    );
}

export default SignUp;