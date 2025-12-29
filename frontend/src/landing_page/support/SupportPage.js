
import React from 'react';

import Hero from './Hero';
import CreateTicket from './CreateTicket';

// Function 1:- SupportPage
function SupportPage() {
    return (
        // Adding all the section in order in Empty Fragment which act like a div
        <>
            <Hero />
            <CreateTicket />
        </>
    );
};

// Export this file
export default SupportPage;