
import React from 'react';

import Hero from './Hero';
import Brokerage from './Brokerage';

import OpenAccount from '../OpenAccount';

// Function 1:- SupportPage
function PricingPage() {
    return (
        // Adding all the section in order in Empty Fragment which act like a div
        <>
            <Hero />
            <OpenAccount />
            <Brokerage />
        </>
    );
};

// Export this file
export default PricingPage;