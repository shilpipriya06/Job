import React, { useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Login() {

    let navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/login', { email, password });
            if (!response.data.error) {
                // Login successful, redirect to home component
                navigate("/home")
            } else {
                // alert("Invalid User Credentials")
                // Login failed, handle error (e.g., show error message)
            }
        } catch (error) {
            // Handle error (e.g., show error message)
            alert("Invalid User Credentials")

        }
    };

    return (
        <div>
            <h1 style={{ "marginTop": "121px" }}>LOGIN</h1>
            <input className='loginpage_text' type='text' value={email} placeholder=' Email' required onChange={(e) => setEmail(e.target.value)} />
            <input className='loginpage_text' type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" style={{ "backgroundColor": "#a25626", "width": "270px" }} onClick={handleLogin}>Log In</Button>
        </div>
    )
}
