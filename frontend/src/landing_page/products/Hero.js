
import React from 'react';

// Function 1:- Hero
function Hero() {
    return (
        <div className='container border-bottom mb-5'>
            <div className='text-center mt-5 p-3'>
                <h1 className=''>Zerodha Products</h1>

                <h3 className='text-muted mt-3 fs-5'>Sleek, modern, and intuitive trading platforms</h3>

                <p className='text-muted mt-3 mb-5'>Check out our <a href='https://zerodha.com/investments' style={{textDecoration: "None"}}>
                    investment offerings&nbsp;
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </p>
            </div>
        </div>
    );
};

// Export this file
export default Hero;