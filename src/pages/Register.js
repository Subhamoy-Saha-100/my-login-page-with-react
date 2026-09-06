import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name,
          email,
          password
        })
      }
    );

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      alert(data.message);
      return;
    }

    alert("Registration successful!");

  } catch (error) {
      console.error("Registration error:", error);
      alert("Unable to connect to server");
    }
  };
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Create Account</h1>
        <p className="subtitle">Register to get started</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">
            CREATE ACCOUNT
          </button>

        </form>

        <p className="register-text">
          Already have an account?
          <Link to="/"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;