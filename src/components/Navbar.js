import React, {useState} from 'react'
import { link } from 'react-router-dom';

function navbar() {
    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                 <link to="/" className="navbar-logo">
                     Travello! <i className="fab fa-typo3"></i>
                 </link>
             </div>
             
        </nav>   
        </>
    )
}

export default navbar
