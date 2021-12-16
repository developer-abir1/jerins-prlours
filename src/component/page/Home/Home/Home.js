import React from 'react';
import Footer from '../../Share/Footer/Footer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header/Header';
import OurServices from '../OurService/OurServices/OurServices';
import Professional from '../Professional/Professional';
import Testimonials from '../Testimonials/Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header />
            <OurServices />
            <Professional />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;