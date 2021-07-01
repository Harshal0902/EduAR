import React from 'react'
import GradHat from "./Assets/graduation.png"
import "./login.css"

const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <section className="login">
            {/* <img className="GradHat" alt="GradHat" src={GradHat} /> */}
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
        </section>
    )

}

export default Login
