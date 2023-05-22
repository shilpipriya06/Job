import React, { useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function Register() {

    let navigate = useNavigate()

    const [user, setUser] = useState({
        userName: "",
        email: "",
        phoneNumber: "",
        education: "",
        gender: "",
        password: ""
    })

    // const { userName, email, phoneNumber, education, gender, password } = user;

    const onInputChange = (e) => {

        //...user will keep on adding evry new input to this setUser object with empty state created 
        //e.target.name will take state name we described above & e.target.value ll give value from input tag
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/register', user);
            if (!response.data.error) {
                // Register successful, redirect to home component
                navigate("/home")
            } else {
                // Register failed, handle error (e.g., show error message)
                alert("Registered Successfully")
            }
        } catch (error) {
            // Handle error (e.g., show error message)
        }
    };

    return (
        <div>
            <h1 style={{ "marginTop": "70px" }}>REGISTER</h1>
            <input className='loginpage_text' name='userName' type='text' placeholder='Full Name' onChange={onInputChange} />
            <input className='loginpage_text' name='phoneNumber' type='text' placeholder='Phone Number' onChange={onInputChange} />
            <input className='loginpage_text' name='email' type='text' placeholder='Email' onChange={onInputChange} />
            <input className='loginpage_text' name='education' type='text' placeholder='Education' onChange={onInputChange} />
            <input className='loginpage_text' name='gender' type='text' placeholder='Gender' onChange={onInputChange} />
            <input className='loginpage_text' name='password' type='password' placeholder='Password' onChange={onInputChange} />
            {/* <button type='button' className='loginpage_button' onClick={newSignUp}>Sign Up</button> */}
            <Button variant="contained" style={{ "backgroundColor": "#a25626", "width": "270px" }} onClick={handleRegister}>Register</Button>
        </div>
    )
}
