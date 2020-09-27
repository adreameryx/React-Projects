import React, {useState} from 'react'
import { link } from 'react-router-dom';

function navbar() {
    const {click, setClick} = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                 <link to="/" className="navbar-logo">
                     Travello! <i className="fab fa-typo3"></i>
                 </link>
                 <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                 </div>
             </div>
             
        </nav>   
        </>
    );
}

export default navbar
