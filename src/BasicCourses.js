import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bcheros from './components/Bcheros';
import Bcmtoe from './components/Bcmtoe';

const BasicCourses = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Bcheros />} />
            </Routes>
        </>
    );
}

export default BasicCourses;
