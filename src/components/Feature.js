import './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './../App.css'
import FeatureBike from './../feature-bike.jpg'

const Feature = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <h2 className='text-center'>Featured Bikes 2021</h2>
                <p  className='text-danger text-center best-collection'>Best bike Collection</p>
                <div className='d-flex justify-content-between'>
                    <div className="col-4">
                        <img width='100%' className='p-5 img-greyScale' src={FeatureBike} alt="" />
                    </div>
                    <div className="col-4">
                        <img width='100%' className='p-5' src={FeatureBike} alt="" />
                    </div>
                    <div className="col-4">
                        <img width='100%' className='p-5 img-greyScale' src={FeatureBike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;