import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="searchbox">
                    <input type="text" id='sb' placeholder='Search Courses' />
                </div>

                <div className="contactinfo">
                    <div className='mailus'><i className="fa-solid fa-at"></i> sachinkyadav457@gmail.com </div>

                    <div className="smicons">
                        <a href="https://www.linkedin.com/in/sachinyadavv11/"><i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.youtube.com/@coding.scape11"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://x.com/sachinyadavv11"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://github.com/sachinyadavv11"><i class="fa-brands fa-github"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
