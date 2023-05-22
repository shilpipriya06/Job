import React, { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import axios from 'axios';

export default function PostJob() {
    const [open, setOpen] = useState(false);


    const [job, setJob] = useState({
        jobTitle: "",
        experience: "",
        skillsSet: "",
        location: "",
        mobileNo: "",
        password: ""
    })

    const onInputChange = (e) => {

        //...user will keep on adding evry new input to this setUser object with empty state created 
        //e.target.name will take state name we described above & e.target.value ll give value from input tag
        setJob({ ...job, [e.target.name]: e.target.value })

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handlePostJob = async () => {

        try {
            const response = await axios.post('http://localhost:8080/api/v1/postJob', job);
            if (!response.data.error) {
                // Register successful, redirect to home component
                setOpen(false)
                window.location.reload()

            } else {
                // Register failed, handle error (e.g., show error message)
            }
        } catch (error) {
            // Handle error (e.g., show error message)
            alert("FAILED")
        }


    };


    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>Post New Jobs</Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle>Create New Jobs</DialogTitle>
                <DialogContent className="navbar_dialogContent" >
                    <input className='loginpage_text' name='jobTitle' type='text' placeholder='Job Titile' onChange={onInputChange} />
                    <input className='loginpage_text' name='experience' type='text' placeholder='Experience' onChange={onInputChange} />
                    <input className='loginpage_text' name='skillsSet' type='text' placeholder='Skill Set' onChange={onInputChange} />
                    <input className='loginpage_text' name='location' type='text' placeholder='Location' onChange={onInputChange} />
                    <input className='loginpage_text' name='mobileNo' type='text' placeholder='Mobile No' onChange={onInputChange} />
                    <input className='loginpage_text' name='description' type='text' placeholder='Description' onChange={onInputChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handlePostJob} variant="contained" color="primary">Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
