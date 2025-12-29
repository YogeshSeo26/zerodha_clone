
import React from 'react';

// Function 1:- RightSection
function RightSection({imageURL, productName, productDescription, learnMore, kiteConnect,}) {
    return (
        <div className="container mt-5">
            <div className='row'>
                
                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p className='fs-5'>{productDescription}</p>

                    <div>
                        <a href={learnMore} style={{  textDecoration: "None" }}>
                            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;
                        </a><br/>

                        {/* <a href={kiteConnect} style={{  textDecoration: "None" }}>
                            Kite Connect <i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;
                        </a> */}
                    </div>
                </div>

                <div className='col-6'>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
};

// Export this file
export default RightSection;