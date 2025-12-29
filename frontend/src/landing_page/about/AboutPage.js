
import React from 'react';

import Hero from './Hero';
import Team from './Team';

// Function 1:- AboutPage
function AboutPage() {
    return (
        // Adding all the section in order in Empty Fragment which act like a div
        <>
            <Hero />
            <Team />
        </>
    );
};

// Export this file
export default AboutPage;