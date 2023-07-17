
import { useState } from "react"

const SignUp = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(Email,Password)
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
            <label>Email</label>
            <input
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
            />
            <label>Password</label>
            
        </form>
    )
}

export default SignUp;