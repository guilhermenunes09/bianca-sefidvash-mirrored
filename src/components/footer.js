import React from 'react';

import './footer.css';

function Footer () {
    const currentYear = () => {
        return new Date().getFullYear();
    }
    new Date().getFullYear()
    return(
        <div className="footer center h-center">
           © {currentYear()} - Biaca Savidvash Arquitetura + Interiores 
        </div>
    );
}

export default Footer;