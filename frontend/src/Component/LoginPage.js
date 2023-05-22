import React, { useState } from 'react'
import Grid from '@mui/material/Grid';

import login_img from "../images/intern.png"
import './LoginPage.css'
import Login from './Login/Login';
import Register from './Register/Register';



export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true)

    const changeisLogin = () => {
        if (isLogin)
            setIsLogin(false)
        else
            setIsLogin(true)
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <div className='loginpage_main'>
                        <div>
                            <img src={login_img} width="500px" alt=''></img>
                        </div>
                        <div className='loginpage_rightComponent'>
                            <div className='loginpage_signin'>

                                {
                                    isLogin ? <Login /> : <Register />
                                }

                            </div>
                            <div>
                                {
                                    isLogin ?
                                        <div className='loginpage_signin'>
                                            Don't have an account? <span onClick={changeisLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Register</span>
                                        </div> :
                                        <div className='loginpage_signin'>
                                            Have an account? <span onClick={changeisLogin} style={{ "fontWeight": "bold", "color": "#0395F6" }}>Log In</span>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>

                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    )
}
