import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Itcourses = () => {
    return (
        <>

            <Header />

            <Navbar />

            <div className="navigateinfo">
                <h3><Link to="/">Home</Link><span>&gt;</span>IT Courses</h3>
            </div>

            <div className="columns">

                <div className="itemsofcs"><img src="/images/CPG.jpeg" alt="" />
                    <h1>C Programming</h1>
                    <h2>Duration : 2 Months</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <Link to="c-programming">View Course</Link>
                        <span> | </span>
                        <Link to="c-programming">Download</Link>
                    </div>
                </div>

                <div className="itemsofcs">
                    <img src="/images/C++.jpeg" alt="" />
                    <h1>C++</h1>
                    <h2>Duration : 3 Months</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <Link to="c++">View Course</Link>
                        <span> | </span>
                        <Link to="c++">Download</Link>
                    </div>
                </div>

                <div className="itemsofcs">
                    <img src="/images/JAVA.jpeg" alt="" />
                    <h1>JAVA</h1>
                    <h2>Duration : 3 Months</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <Link to="java">View Course</Link>
                        <span> | </span>
                        <Link to="java">Download</Link>
                    </div>
                </div>

            </div>

            <div className="coursesc2">
                <div className="itemsofcs">
                    <img src="/images/ReactJs.png" alt="" />
                    <h1>FrontEnd DEV</h1>
                    <h2>Duration : 3 Months</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <a href="#">View Course</a>
                        <span> | </span>
                        <a href="#">Download</a>
                    </div>
                </div>

                <div className="itemsofcs">
                    <img src="/images/SpringBoot.png" alt="" />
                    <h1>Backend DEV</h1>
                    <h2>Duration : 3 Months</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <a href="#">View Course</a>
                        <span> | </span>
                        <a href="#">Download</a>
                    </div>
                </div>

                <div className="itemsofcs">
                    <img src="/images/Fsdev.jpg" alt="" />
                    <h1>Full Stack DEV</h1>
                    <h2>Duration : 6 Months</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <a href="#">View Course</a>
                        <span> | </span>
                        <a href="#">Download</a>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Itcourses
