import React from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from './../logo.png'
const Header = () => {
    return (
        <div className='sticky-top'>
                <nav style={{background:'#264653'}} class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="index.html"><img width='50px' src={Logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link text-white active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-white" href="#feature">Feature</a>
                        </li>
                        <li class="nav-item">
                        <a href="#contact" class="nav-link text-white">Disabled</a>
                        </li>
                        <li class="nav-item">
                       <button className='btn btn-danger border-3 text-white px-4 ms-3'>Login</button>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;