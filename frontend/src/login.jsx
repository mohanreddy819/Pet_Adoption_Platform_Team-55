import React, { useState } from 'react';
import './loginStyle.css'; // Import the CSS file
import logo from './Images/logo.jpg'; // Import the logo image
import SignupForm from './signup'; // Import the sign-up form component
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSignup, setShowSignup] = useState(false); // State to manage sign-up form visibility
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost/New%20folder/backend/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `username=${username}&password=${password}`,
            });

            if (!response.ok) {
                setError('An error occurred during login.');
                return;
            }

            const data = await response.json();

            if (data.success) {
                if (data.isAdmin === true) {
                    navigate('/admin'); // Navigate to admin page if the user is an admin
                } else {
                    navigate('/home'); // Navigate to home page if the user is not an admin
                }
            } else {
                setError(data.message);
            }
        }
        catch (error) {
            console.error('Error during login:', error.message);
            setError('An error occurred during login.');
        }
    };

    return (
        <div>
            <div className="header">
                <div className="brandLogo">
                    <a href="home.html">
                        <img src={logo} alt="" /> {/* Use the imported logo image */}
                    </a>
                </div>
            </div>
            {/* Header ends */}

            <div className="container">
                <div className="form-container">
                    <div className="form-content login-form">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="login-username" name="loginUsername" placeholder="Username"
                                    value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="login-password" name="loginPassword" placeholder="Password"
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                    {showSignup && <SignupForm />} {/* Show the sign-up form if showSignup is true */}
                </div>
                <button id="toggle-signup" className="btn btn-secondary" onClick={() => setShowSignup(!showSignup)}>Sign Up</button>
            </div>
        </div>
    );
}

export default Login;
