import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import Study from "./Assets/study.svg"
import "./login.scss"
import Fade from 'react-reveal/Fade';

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <Container>

            <Fade left>
                <div className="box1"></div>
            </Fade>

            <Fade bottom>
                <div className="login-box">
                    <Row>
                        <Col md={6} className="img">
                            <img src={Study} className="img-fluid" alt="Me" />
                        </Col>
                        <Col md={6} className="login-signup">
                            <div className="loginContainer">
                                <h1 className="EduAR-Heading">EduAR</h1>
                                <label>Email</label>
                                <input type="text" placeholder="test@gmail.com" outoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <p className="errorMsg">{emailError}</p>
                                <label>Password</label>
                                <input type="password" placeholder="123456" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                <p className="errorMsg">{passwordError}</p>
                                <div className="btnContainer">
                                    {hasAccount ? (
                                        <>
                                            <input type="password" placeholder="Conform Password" required value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: "20px" }} />
                                            <button onClick={handleSignup}>Sign In</button>
                                            <p>Have an account ?{" "}
                                                <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={handleLogin}>Sign In</button>
                                            <p>Dont't have an account ?{" "}
                                                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Fade>

                <div className="box2"></div>
        </Container>
    )

}

export default Login
