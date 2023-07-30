// SignIn component


import { useState } from "react"

const LogIn = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(Email,Password)
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

            <button>Log In</button>
            
        </form>
    )
}

export default LogIn;