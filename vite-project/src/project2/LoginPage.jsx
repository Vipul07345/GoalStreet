// project2/LoginPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AuthPage.css';

const LoginPage = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // useEffect to check for existing login token/user data on component mount
    useEffect(() => {
        // Retrieve stored user data/token from localStorage
        const storedUserData = localStorage.getItem('userLoggedIn');
        if (storedUserData) {
            try {
                const userData = JSON.parse(storedUserData);
                // If there's stored data, assume user is logged in
                // and call onLoginSuccess to update parent component's state
                if (onLoginSuccess) {
                    onLoginSuccess(userData);
                }
            } catch (e) {
                console.error("Failed to parse stored user data:", e);
                // Clear invalid data if parsing fails
                localStorage.removeItem('userLoggedIn');
            }
        }
    }, [onLoginSuccess]); // Dependency array includes onLoginSuccess to re-run if it changes

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const datalogin = {
            LoginEmail: email,
            LoginPassword: password
        };

        try {
            const response = await axios.post("http://localhost:8000/api/login", datalogin);
            console.log(response.data);

            // Store the user data/token in localStorage upon successful login
            // Make sure your backend sends back data that helps identify the user (e.g., user ID, token, role)
            localStorage.setItem('userLoggedIn', JSON.stringify(response.data));

            alert("Login successfully");
            setEmail("");
            setPassword("");

            if (onLoginSuccess) {
                onLoginSuccess(response.data);
            }
        } catch (error) {
            console.error("Error in login:", error);
            // Clear any stored login data if login fails (e.g., if a previous session was invalid)
            localStorage.removeItem('userLoggedIn');

            // Handle specific error messages from backend if available
            const errorMessage = error.response?.data?.message || "Failed to login. Please check your credentials and try again.";
            setError(errorMessage);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="auth-button">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;