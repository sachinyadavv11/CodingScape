import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

const Bcheros = () => {
  return (
    <div>
        <Header/>
        <Navbar/>

      <div className="navigateinfo">
                <h3><Link to='/'>Home</Link><span>&gt;</span>Basic Courses</h3>
            </div>

            <div className="columns">
                <div className="itemsofcs"><img src="/images/Office.png" alt=""/>
                    <h1>Microsoft Office</h1>
                    <h2>Duration : N/A</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <Link to="#">View Course</Link>
                        <span> | </span>
                        <a href="#">Download</a>
                    </div>
                </div>
                <div className="itemsofcs">
                    <img src="/images/Photoshop.png" alt="" />
                    <h1>Adobe Photoshop</h1>
                    <h2>Duration : N/A</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <a href="#">View Course</a>
                        <span> | </span>
                        <a href="#">Download</a>
                    </div>
                </div>
                <div className="itemsofcs">
                    <img src="/images/Excel.png" alt="" />
                    <h1>Advance Excel</h1>
                    <h2>Duration : N/A</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <a href="#">View Course</a>
                        <span> | </span>
                        <a href="#">Download</a>
                    </div>
                </div>
            </div>

            <Footer/>
    </div>
  )
}

export default Bcheros
