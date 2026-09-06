import { useState } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Email:", email);
      console.log("Password:", password);
      try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        });

        const data = await response.json();

        console.log("Backend response:", data);

        if (!response.ok) {
          alert(data.message);
          return;
        }

        alert("Login successful!");
      } catch (error) {
        console.error("Login error:", error);
        alert("Unable to connect to server");
      }
    };

    
    return (
        <div className="login-page">
            <div className='login-card'>
                <h1>Welcome to the Login Page</h1>
                <p className="subtitle">Please enter your credentials to log in.</p>
                <form onSubmit={handleSubmit}>
                    <label>Email : </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <label>Password : </label>
                    <input 
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <button type="submit">Login</button>
                </form>
                <p className="register-text">
                    Don't have an account?
                    <Link to="/register"> Register</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;