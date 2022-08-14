import React from 'react';
import Hero from "../conpanents/Hero"
import Card from "../conpanents/Card";
import Connection from "../conpanents/Connection";
import Footer from "../conpanents/Footer";

const Home = () => {
    return (
        <div>
            <Hero/>
            <Card/>
            <Connection/>
        <Footer/>
        </div>
    );
};

export default Home;