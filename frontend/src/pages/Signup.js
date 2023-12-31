// Signup Page

import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";

const SignUp = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const {signup, isLoading, error} = useSignUp();

    const handleSubmit = async (e) => {

        e.preventDefault();

        await signup(Email,Password);
    
    }

    return(
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Sign up</h3>
            <label>Email</label>
            <input
                type="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
            />
            <label>Password</label>
            <input
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
            />

            <button disabled ={isLoading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
            
        </form>
    )
}

export default SignUp;
