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
                        <li><a href="login">Login</a></li>
                        <li><a href="signup">SignUp</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Navbar;
