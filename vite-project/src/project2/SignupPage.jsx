// project2/SignupPage.js
import React, { useState } from 'react';
import axios from 'axios';
import './AuthPage.css';

const SignupPage = ({ onSignupSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const dataSignup = {
            SignUpFullName: name,
            SignUpEmail: email,
            SignUpPassword: password,
            SignUpConfirmPassword: confirmPassword
        };

        try {
            const response = await axios.post("http://localhost:8000/api/signup", dataSignup);
            console.log(response.data);
            alert("Sign up successfully!");
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

            if (onSignupSuccess) {
                onSignupSuccess(response.data);
            }
        } catch (error) {
            console.error("Error in signup:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else if (error.response && error.response.data) {
                setError(JSON.stringify(error.response.data));
            }
            else {
                setError("Failed to sign up. Please try again.");
            }
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="auth-button">Sign Up</button>
                </form>

            </div>
        </div>
    );
};

export default SignupPage;