import React, { useState } from 'react'
import Navbar from './Navbar'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import Footer2 from './Footer2'

const LoginPage = () => {

    const userdata = [
        { name: "sachin", username: "sachinyadav", password: "1234" },
        { name: "abhi", username: "abhi1234", password: "1215" }
    ]

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = userdata.find(
            (user) => user.username === username && user.password === password );

        if (user) {
            alert("Login Successful");
        } else {
            alert("Invalid username or password");
        }
    }

    return (
        <>
            <Navbar />

            <div className="loginnavigate">
                <h1>Login</h1>
            </div>

            <div className="formoflogin">

                <form className="form-log" onSubmit={handleSubmit}>
                    <div className="flex-column">
                        <label>Email </label></div>
                    <div className="inputForm">
                        <input type="text" className="input" placeholder="Enter your Email"
                            value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="flex-column">
                        <label>Password </label></div>
                    <div className="inputForm">
                        <input type="password" className="input" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex-row">
                        <div>
                            <input type="checkbox" />
                            <label>Remember me </label>
                        </div>
                        <span className="span">Forgot password?</span>
                    </div>
                    <button className="button-submit">Sign In</button>
                    <p className="p">Don't have an account? <span className="span"><Link to="/register">Sign up</Link></span>
                    </p><p className="p line">Or With</p>

                    <div className="ggogleandapple">
                        <span><i class="fa-brands fa-google-plus-g"></i> Google</span>

                        <span><i class="fa-brands fa-apple"></i> Apple</span>
                    </div>

                </form>

            </div>

            <Footer2 />

        </>
    )
}

export default LoginPage
