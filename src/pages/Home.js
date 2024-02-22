import React from 'react';
import Navbar from './../components/Navbar';
import Hero from './../components/Hero';
import Main from './../components/main';
import Footer from './../components/Footer';
import "../assets/css/style.css"

const Home = () => {
    return (
       <>
       <Navbar/>
       <Hero/>
       <Main/>
       <Footer/>
       </>
    );
};

export default Home;