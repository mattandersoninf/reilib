
/* code block 4 */

import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    // Navbar handling
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    return(
        <header>
            <div className="logo">
                <Link to="/">
                    <h1>REILib</h1>
                </Link>
            </div>
            <div className='navbar-container'>
                <nav>
                    <ul>
                        <Link to="/login"><li>Login</li></Link>
                        <Link to="/signup"><li>SignUp</li></Link>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Navbar;
