import { useState } from 'react';
import { Link } from 'react-router-dom';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {   
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
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