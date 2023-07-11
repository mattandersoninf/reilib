// SignIn component

import Navbar from "../components/Navbar"


const SignIn = () => {
    <>
    <Navbar/>
      <h1>Sign In</h1>
      <p>Please sign in to access the members-only area of my website.</p>
      <form>
        <label>Email:</label>
        <input type="email" required /><br />
        <label>Password:</label>
        <input type="password" required /><br />
        <button type="submit">Sign In</button>
      </form>
    </>
}

export default SignIn