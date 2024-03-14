import React, { useState } from 'react';
// import './signupStyle.css'; // Import the CSS file
import './loginStyle.css';

function SignUp() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost/New%20folder/backend/signup.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `signupName=${name}&signupUsername=${username}&signupPassword=${password}&signupEmail=${email}&signupPhone=${phone}&signupDOB=${dob}&signupAddress=${address}`,
            });

            if (!response.ok) {
                setError('An error occurred during sign up.');
                return;
            }

            const data = await response.json();

            if (data.success) {
                console.log('Sign up successful');
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error during sign up:', error.message);
            setError('An error occurred during sign up.');
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-content signup-form">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="signup-name" name="signupName" placeholder="Name"
                                value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="signup-username" name="signupUsername" placeholder="Username"
                                value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="signup-password" name="signupPassword" placeholder="Password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="signup-email" name="signupEmail" placeholder="Email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" id="signup-phone" name="signupPhone" placeholder="Phone Number"
                                value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control" id="signup-dob" name="signupDOB"
                                value={dob} onChange={(e) => setDob(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="signup-address" name="signupAddress" placeholder="Address"
                                value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                    {error && <div>{error}</div>}
                </div>
            </div>
        </div>
    );
}

export default SignUp;
