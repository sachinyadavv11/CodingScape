import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BasicCourses from './BasicCourses';
import Courses from './Courses';
import Homepage from './Homepage';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './components/ContactUs';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <Router>
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About/>} />
          <Route path="/basic-courses/*" element={<BasicCourses />} />
          <Route path="/courses/*" element={<Courses />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>

      </>
    </Router>
  );
}

export default App;