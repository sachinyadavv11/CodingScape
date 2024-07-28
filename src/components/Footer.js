import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer1">
                    {/* <div className="logoandname">
                        <h2>Visit Us</h2>
                        <img src="/images/logo-color.png" alt="" />
                    </div> */}
                    <div className="contactus">
                        <h2>Contact us</h2>
                        <span><i class="fa-solid fa-phone-volume"></i> XXXXXXXXXX , XXXXXXXXXX</span>
                        <span><i class="fa-solid fa-at"></i> sachinkyadav457@gmail.com</span>
                        <div className="address">
                            <i class="fa-solid fa-location-dot"></i>
                            Bhishanpura Khoda Sector 59 <br />
                            Noida 201301
                        </div>
                    </div>
                    <div className="usefullinks">
                        <h2>Useful Links</h2>
                        <span><i class="fa-regular fa-circle-dot"></i>  &nbsp;Terms & Conditions </span>
                        <span><i class="fa-regular fa-circle-dot"></i> &nbsp;Privacy Policy</span>
                        <span><i class="fa-regular fa-circle-dot"></i> &nbsp;Disclaimer</span>
                        <span><i class="fa-regular fa-circle-dot"></i> &nbsp;Regulations</span>
                    </div>
                    <div id="sml">
                        <h2>Social Media</h2>
                        <div className="smllinks">
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://x.com/sachinyadavv11" target='blank'><i class="fa-brands fa-x-twitter"></i></a>
                            <a href="https://www.youtube.com/@coding.scape11" target='blank'><i class="fa-brands fa-youtube"></i></a>
                            <a href="https://www.linkedin.com/in/sachinyadavv11/" target='blank'><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://github.com/sachinyadavv11" target='blank'><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Footer
