import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../service/Interceptor"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const response = await api.post('/auth/login', {
                username,
                password
            })
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            setError('')
            navigate('/dashboard')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setError('Invalid credentials')
        }
    }
    return (
        <div>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login