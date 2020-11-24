const Login = () => {
  return (
      <div className = "login">
        <h2 className="login-title">Welcome!</h2>
        <h3 className="login-text"> Fill in your login details to proceed</h3>
        <form >  
          <input className = "login-email"  type="text" id="email" name="email" placeholder="  Email"/><br></br>
        
          <input className = "login-password"  type="text" id="lname" name="lname" placeholder = "  Password"/><br></br>

          <a className = " login-forgot" href="/">I forgot my password</a>
          <input className = "login-btn" type="submit" value="Login"/>
        <h3 className = "login-text2"> Don't have an account yet?</h3> 
        <a className = "login-signup" href = "/" ><b>Sign Up ?</b></a>
        </form> 

      </div>
  )
}

export default Login