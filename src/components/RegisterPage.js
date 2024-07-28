import React, { useState } from 'react'
import Navbar from './Navbar'
import './RegisterPage.css'
import { Link } from 'react-router-dom'
import Footer2 from './Footer2'

const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Navbar />

            <div className="loginnavigate">
                <h1>Sign up</h1>
            </div>

            <div className="form-box">
                <form className="form">
                    <span className="title">Sign up</span>
                    <span className="subtitle">Create a free account with your email.</span>
                    <div className="form-container">
                        <input type="text" className="inputrp" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" className="inputrp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="inputrp" placeholder="Password"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button>Sign up</button>

                    <div className="ggogleandapple">
                        <span><i class="fa-brands fa-google-plus-g"></i> Google</span>

                        <span><i class="fa-brands fa-apple"></i> Apple</span>
                    </div>
                </form>
                <div className="form-section">
                    <p>Have an account? <Link to="/login">Log in</Link> </p>
                </div>

            </div>

            <Footer2 />
        </>
    )
}

export default RegisterPage
