/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/Interceptor";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { handleGoogleRegister } from "../service/GoogleAuth";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await api.post('/auth/register', {
                username,
                password,
                email
            });
            setError('');
            navigate('/login');
        } catch (error) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            <GoogleOAuthProvider clientId="">
                <GoogleLogin 
                onSuccess={handleGoogleRegister}
                onError={() => {
                    console.error('Google authentication failed. Please try again.');
                }}/>
            </GoogleOAuthProvider>
        </div>
    );
};

export default Register;
