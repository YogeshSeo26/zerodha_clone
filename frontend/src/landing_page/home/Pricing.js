
import React from 'react';

// Function 1:- Pricing
function Pricing() {
    return (
        <div className='container'>
            <div className='row'>

                {/* Left Hand Side */}
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <a href='' style={{textDecoration: "none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

                {/* Center Side / also we can use padding or margin here, instead of Center div*/}
                <div className='col-2'></div>

                {/* Right Hand Side */}
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        {/* Left Hand Side */}
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>

                        {/* Right Hand Side */}
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export this file
export default Pricing;