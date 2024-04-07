
/* navbar component */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
// import { useAuthContext } from "../hooks/useAuthContext";


const Navbar = () => {

    // Navbar handling
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    const { logout } = useLogout();
    // const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return(
        <header>
            <div className='container'>
                <Link to="/">
                    <h1>REILib</h1>
                </Link>
                    {/*user && (*/}
                        <div>
                            <ul>
                                {/*<span>{user.Email}</span>*/}
                    
                                <Link to="/newProp"><li>Add New Property</li></Link>

                                <button onClick={handleClick} className="logout">Log Out</button>
                            </ul>
                        </div>
                    {/*)}}*/}
                    {/*{!user && (*/}
                        <ul>
                            <Link to="/login"><li>Login</li></Link>
                            <Link to="/signup"><li>SignUp</li></Link>
                            <Link to="/newProp"><li>Add New Property</li></Link>
                        </ul>
                    {/*})}*/}
            </div>
        </header>
    )

}

export default Navbar;

