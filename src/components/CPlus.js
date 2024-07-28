import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Footer2 from './Footer2'

const CPlus = () => {
    return (
        <>

            <Navbar />

            <div className="btop"></div>

            <div className="hdandp">
                <h1>Introduction to C++</h1>
                <p>Welcome to the C++ programming course! This course is designed to guide you through the fundamentals of C++ programming, from basic syntax to advanced concepts. Whether you're a beginner or have some programming experience, this course will help you master C++.</p>
            </div>

            <div className="hdandp">
                <h1>Why Learn C++ ?</h1>
                <p>C++ is a powerful, high-performance programming language that is widely used in various fields, including system/software development, game development, and real-time simulations. Learning C++ can open up many opportunities and equip you with skills that are highly valued in the tech industry.</p>
                <ol>
                    <li><span>Performance : </span> C++ provides excellent performance and control over system resources, making it ideal for developing high-performance applications.
                    </li>

                    <li>
                    <span>Syntax FamiliaritObject-Oriented Programming (OOP) : </span> C++ supports OOP, which helps in creating modular, reusable, and maintainable code.
                    </li>

                    <li><span>Versatility : </span>C++ is used in various domains, including operating systems, games, embedded systems, and more.</li>
                </ol>
            </div>

            <div className="ddbtn">
                <button className="button">
                    <span className="button-content"><a href="/pdf/c++pdf.pdf">Download C++ Guide PDF</a></span>
                </button>
            </div>

            <Footer/>

            <Footer2/>

        </>
    )
}

export default CPlus
