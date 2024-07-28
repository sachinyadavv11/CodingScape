import React, { useState } from 'react';
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './ContactUs.css'
import Footer2 from './Footer2';

const ContactUs = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name : ", username);
        console.log("Email : ", email);
        console.log("Message : ", message);

        setUsername('');
        setEmail('');
        setMessage('');

        alert("Thanks for your feedback , We Appriciate it.")

    }

    return (
        <>

            <Navbar />

            <h1 className='cuhd'>Contact Us</h1>

            <div className="mailform">
                <div className="mailandnumber"><h1>@ Coding Scape</h1>
                    <h2><i class="fa-solid fa-square-phone"></i>: XXXXXXXXXX</h2>
                    <h2><i className="fa-solid fa-at"></i>: sachinkyadav457@gmail.com</h2>
                    <h3>Address : Bhishanpura Khoda Sector 59 <br /> Noida U.P.</h3>
                </div>

                <div className="contact-form">

                    <span className="heading">Feedback</span>

                    <form action="https://api.web3forms.com/submit" method="POST">

                        <input type="hidden" name="access_key" value="020facab-862e-4ce4-87b1-c84d25d0a0fe" />

                        <label htmlFor="name">Name:</label>

                        <input type="text" id='name' name='name' value={username} onChange={(e) => setUsername(e.target.value)} required />


                        <label htmlFor="email">Email:</label>

                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />


                        <label htmlFor="message">Message:</label>

                        <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />


                        <button type="submit">Submit</button>

                    </form>
                </div>
            </div>

            <Footer2 />

        </>
    )
}

export default ContactUs
