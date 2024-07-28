import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const CoreJava = () => {
    return (
        <>

            <Navbar />

            <div className="btop">
                
            </div>

            <div className="hdandp">
                <h1>Introduction to Java Programming</h1>
                <p>Welcome to the comprehensive Java Programming Guide by Coding Scape! This guide is meticulously crafted to provide you with a solid foundation in Java programming, one of the most popular and versatile programming languages in the world. Whether you are a beginner just starting your programming journey or an experienced developer looking to enhance your skills, this guide has something valuable for everyone.</p>
            </div>

            <div className="hdandp">
                <h1>Why Java ?</h1>
                <p>Java is a powerful, object-oriented programming language known for its portability, performance, and robustness. Here are some reasons why learning Java is a great investment :</p>
                <ol>
                    <li>Platform Independence</li>
                    <li>Wide Range of Applications</li>
                    <li>Strong Community Support</li>
                    <li>Career Opportunities</li>
                    <li>Robustness and Security</li>
                </ol>
            </div>

            <div className="ddbtn">
                <button className="button">
                    <span className="button-content"><a href="/pdf/javapdf.pdf">Download Java Guide PDF</a></span>
                </button>
            </div>

            <Footer />

        </>
    )
}

export default CoreJava
