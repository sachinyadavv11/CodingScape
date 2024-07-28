import React from 'react'
import Navbar from './Navbar'
import Footer2 from './Footer2'
import './Cprg.css'

const Cprg = () => {
    return (
        <>

            <Navbar />

            <div className="btop">
                
            </div>

            <div className="hdandp">
                <h1>Introduction to C Programming</h1>
                <p>Welcome to the ultimate guide for mastering C programming! Whether you are a beginner or looking to deepen your understanding of C, this comprehensive PDF will serve as your go-to resource. Authored by Coding Scape, this guide is meticulously designed to take you from the basics to advanced topics, ensuring a solid foundation in C programming.</p>
            </div>

            <div className="hdandp">
                <h1>Why Learn C-Programming ?</h1>
                <ol>
                    <li><span>Understanding the Basics : </span> Many modern programming languages such as C++, Java, and Python are influenced by C. Learning C provides a strong foundation that makes it easier to learn and understand these other languages.
                    </li>

                    <li>
                    <span>Syntax Familiarity : </span> The syntax and concepts learned in C are transferable to many other languages, making it easier to pick up new languages in the future.
                    </li>

                    <li><span>Speed : </span>Programs written in C typically run faster than those written in higher-level languages because C code is compiled directly into machine code.</li>

                    <li><span>Logical Thinking : </span> The process of writing C code helps develop logical thinking and debugging skills, which are essential for any successful programmer.</li>

                    <li><span>Understanding the Computer Architecture : </span>Programming in C offers a closer look at how computers operate, including how they execute instructions and manage resources.</li>

                    <li><span>Attention to Detail : </span>C's syntax and semantics require precision and attention to detail, which helps in developing disciplined and thorough programming habits.</li>
                </ol>
            </div>

            <div className="ddbtn">
                <button className="button">
                    <span className="button-content"><a href="/pdf/cppdf.pdf">Download C-Programming Guide PDF</a></span>
                </button>
            </div>


            <Footer2/>

        </>
    )
}

export default Cprg
