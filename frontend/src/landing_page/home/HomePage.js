
import React from 'react';

import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount';

// Function 1:- HomePage
function HomePage() {
    return (
        // Adding all the section in order in Empty Fragment which act like a div
        <>
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
};

// Export this file
export default HomePage;