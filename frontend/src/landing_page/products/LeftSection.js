
import React from 'react';

// Function 1:- LeftSection
function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, coin, googlePlay, appStore}) {
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-4'>
                    <img src={imageURL} />
                </div>

                <div className='col-2'></div>

                <div className='col-6 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p className='fs-5'>{productDescription}</p>

                    <div>
                        <a href={tryDemo} style={{textDecoration: "None"}}>
                            Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;
                        </a>

                        <a href={learnMore} style={{marginLeft: "50px", textDecoration: "None"}}>
                            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;
                        </a><br/>

                        {/* <a href={coin} style={{ textDecoration: "None" }}>
                            Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i>&nbsp;
                        </a> */}
                    </div>

                    <div className="mt-4">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" style={{marginLeft: "50px"}}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export this file
export default LeftSection;