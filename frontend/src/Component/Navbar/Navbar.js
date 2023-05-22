import "./Navbar.css"
import { Grid } from '@mui/material'
import React from 'react'
// import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import avatar from "../../images/avatar.png"

import job_logo from "../../images/job.jpg"
import search_img from "../../images/magnify.png"
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import PostJob from "../PostJob/PostJob";

export default function Navbar() {
    // const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className='navbar_barContent'>
                <Grid container>
                    {/* Navbar LEFT Side Grid*/}
                    <Grid item xs={2}>
                        <img className='navbar_img_margin' src={job_logo} width="100px" alt='' />
                    </Grid>

                    {/* Navbar EMPTY MIDDLE Grid*/}
                    <Grid item xs={6}>

                    </Grid>

                    {/* Navbar END Side Grid*/}
                    <Grid className='navbar_right' item xs={4}>
                        <Stack direction="row" spacing={4}>
                            {/* navbar search image*/}
                            <img src={search_img} width="35px" alt='' />

                            {/* navbar Post New Jobs Button*/}
                            <div>
                                <PostJob />
                            </div>

                            {/* Navbar Avatar */}
                            <img src={avatar} alt='' width="35px" onClick={goBack} />
                            {/* <Button onClick={goBack}>Log Out</Button> */}
                        </Stack>
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}
