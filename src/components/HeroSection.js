import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <>

            <div className="heroimage">
                <div className="learnbecome">
                    <h1>Unlock Your Coding Potential</h1>
                    <h2>Free Programming PDF's <br />
                        for Everyone</h2>
                    <span>Learn & became the top
                        Web Developer</span>
                </div>

                <div className="imghero">
                    <img src="/images/heroimg.jpeg" alt="" />
                </div>
            </div>

            <h1 id='hd'>Explore Popular Courses</h1>

            <div className="columns">
                <div className="itemsofcs"><img src="/images/CPG.jpeg" alt="" />
                    <h1>C Programming</h1>
                    <h2>Duration : 2 Months</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <Link to="courses/c-programming">View Course</Link>
                        <span> | </span>
                        <Link to="courses/c-programming">Download</Link>
                    </div>
                </div>
                <div className="itemsofcs">
                    <img src="/images/C++.jpeg" alt="" />
                    <h1>C++</h1>
                    <h2>Duration : 3 Months</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <Link to="courses/c++">View Course</Link>
                        <span> | </span>
                        <Link to="courses/c++">Download</Link>
                    </div>
                </div>
                <div className="itemsofcs">
                    <img src="/images/JAVA.jpeg" alt="" />
                    <h1>JAVA</h1>
                    <h2>Duration : 3 Months</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <Link to="courses/java">View Course</Link>
                        <span> | </span>
                        <Link to="courses/java">Download</Link>
                    </div>
                </div>
            </div>

            <div className="columns2">
                <Link to="/courses">View All</Link>
            </div>

            <h1 id='hd2'>Beginner Courses</h1>

            <div className="columns">
                <div className="itemsofcs"><img src="/images/Office.png" alt="" />
                    <h1>Microsoft Office</h1>
                    <h2>Duration : N/A</h2>
                    <h3>Price : N/A</h3>
                    <div className="syllabus">
                        <Link to="basic-courses/ms-office">View Course</Link>
                        <span> | </span>
                        <Link to="basic-courses/ms-office">Download</Link>
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

            <div className="columns2">
                <Link to="/basic-courses">View All</Link>
            </div>


            <div className="missionul">
                <h1 id='hd3'>Our Mission</h1>
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
                    <li><span>Updated Information : </span> Stay ahead with the latest trends and updates in programming, ensuring your knowledge is always current.</li>
                    <li><span>User-Friendly Format </span>: Easily navigate through our PDFs with clear headings, bullet points, and an organized layout.</li>
                    <li><span>Printable and Portable </span>: Take your learning on the go! Download, print, and study wherever you are.</li>
                </ul>
            </div>

            <h1 id='hd4'>Our Students</h1>

            <div className="studentsdata">
                <div className="sd1">
                    <img src="/images/boy1.png" alt="" />
                    <h1>Saransh Yadav</h1>
                    <h2>B.Tech. CS</h2>
                    <h2>JAVA DEV</h2>
                </div>
                <div className="sd1">
                    <img src="/images/boy2.png" alt="" />
                    <h1>Akash Singh</h1>
                    <h2>MCA</h2>
                    <h2>Backend DEV</h2>
                </div>
                <div className="sd1">
                    <img src="/images/girl1.png" alt="" />
                    <h1>Ayesha Yadav</h1>
                    <h2>B.C.A.</h2>
                    <h2>Frondend DEV</h2>
                </div>
            </div>

            <h1 id="hd5">Company Oriented Notes</h1>

            <div className="companyimage">
                <img src="/images/CompanyImage.jpg" alt="" />
            </div>

        </>
    )
}

export default HeroSection
