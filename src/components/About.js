import React from 'react'
import Navbar from './Navbar'
import Footer2 from './Footer2'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <>
            <Navbar />

            <div className="navigateinfo">
                <h3><Link to="/">Home</Link><span>&gt;</span>About</h3>
            </div>

            <div className="formargininabout">

            </div>

            <div className="missionul">
                <h1 id='hd3'>About us & Our Mission</h1>
                <ul>
                    <li>Our mission at <b>Coding Scape</b> is to provide accessible, high-quality online education to beginners in coding.</li>
                    <li>We are dedicated to offering comprehensive and engaging courses through easily accessible online PDFs, ensuring that our students have the flexibility to learn at their own pace and convenience.</li>
                    <li>Our goal is to empower learners with the knowledge and skills they need to achieve their academic and professional aspirations.</li>
                    <li>By leveraging the latest educational technologies and methodologies, we strive to create an inclusive and supportive learning environment that caters to diverse learning styles and needs.</li>
                </ul>
            </div>

            <div className="ddpdf">

                <h1 id='hd6'>Why Download Our Programming PDFs ?</h1>

                <ul>
                    <li><span>Quality Content : </span>Dive into comprehensive and well-structured guides covering essential programming languages.</li>
                    <li><span>Practical Examples :</span> Learn through clear, real-world examples that make complex concepts easy to understand.</li>
                    <li><span>Hands-On Exercises:</span> Practice with a variety of exercises designed to reinforce your learning and build your skills.</li>
                    <li><span>Free and Accessible </span>: Enjoy high-quality educational resources at no cost, available anytime, anywhere.</li>
                    <li><span>Up-to-Date Information : </span> Stay ahead with the latest trends and updates in programming, ensuring your knowledge is always current.</li>
                    <li><span>User-Friendly Format </span>: Easily navigate through our PDFs with clear headings, bullet points, and an organized layout.</li>
                    <li><span>Printable and Portable </span>: Take your learning on the go! Download, print, and study wherever you are.</li>
                </ul>
            </div>

            <Footer2 />

        </>
    )
}

export default About
