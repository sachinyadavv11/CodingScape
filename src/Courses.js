import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './Courses.css'
import Itcourses from './components/Itcourses';
import Cprg from './components/Cprg';
import CoreJava from './components/CoreJava';
import CPlus from './components/CPlus';


const Courses = () => {
    return (
        <>

            <Routes>

                <Route path="/" element={<Itcourses />} />
                <Route path="c-programming" element={<Cprg />} />
                <Route path="java" element={<CoreJava />} />
                <Route path='c++' element={<CPlus />} />

            </Routes>

        </>
    )
}

export default Courses
