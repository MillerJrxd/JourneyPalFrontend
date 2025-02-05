import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import api from "./Interceptor";

export const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    try {
        const { credential } = credentialResponse;

        if (!credential) {
            throw new Error('Google authentication failed. Please try again.');
        }

        const response = await api.post('/auth/login-google', { idToken: credential });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        window.location.href = '/dashboard'; // Redirect to home page
    }
    catch (error) {
        console.error('Google authentication error:', error);
        alert('Google authentication failed. Please try again.');
    }
}

export const handleGoogleRegister = async (credentialResponse: CredentialResponse) => {
    try {
        const { credential } = credentialResponse;

        if (!credential) {
            throw new Error('Google authentication failed. Please try again.');
        }

        const response = await api.post('/auth/register-google', { idToken: credential });

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        window.location.href = '/dashboard'; // Redirect to home page
    }
    catch (error) {
        console.error('Google authentication error:', error);
        alert('Google authentication failed. Please try again.');
    }
}