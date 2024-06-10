// LogIn page


import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const LogIn = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();
    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(Email,Password)
    }

    return(
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log In</h3>
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

            <button disabled={isLoading}>Log In</button>
            {error && <div className="error">{error}</div>}
            
        </form>
    )
}

export default LogIn;