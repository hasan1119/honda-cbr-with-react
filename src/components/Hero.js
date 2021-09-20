import React from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeroImage from './../home-banner.png';
const Hero = () => {
    return (
       <div style={{background:'#264653'}} className="text-white">
            <div className='container' >
            <div className="d-flex justify-content-between align-items-center py-5">
                <div className="col-6">
                    <h5>Computer-controlled digital transistorized with electronic advance</h5>
                    <h1>Honda CBR 300R</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className='btn btn-danger px-4'>Purchase</button>
                </div>
                <div className="col-6">
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </div>
       </div>
    );
};

export default Hero;