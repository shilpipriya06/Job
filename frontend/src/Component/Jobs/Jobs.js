import React from 'react'
import Card from '@mui/material/Card';
import "./Jobs.css"
import { Box, Button, CardActions, CardContent } from '@mui/material';



export default function Jobs(props) {

    const { jobTitle, experience, skillSet, location, mobileNo, description } = props;

    return (
        <Box width='400px'>
            <Card >
                <CardContent>
                    <div className="card-body">
                        <p><strong>Job Title:</strong> {jobTitle} </p>
                        <p><strong>Experience:</strong> {experience}</p>
                        <p><strong>Skill Set:</strong>  {skillSet}</p>
                        <p><strong>Location:</strong> {location}</p>
                        <p><strong>MobileNo:</strong> {mobileNo}</p>
                        <p><strong>Description:</strong> {description}</p>
                    </div>
                </CardContent>

                <CardActions style={{ "display": "flex", "justifyContent": "space-between" }}>
                    <Button size='small' >Share</Button>
                    <Button size='small' >Learn More</Button>

                </CardActions>
            </Card>
        </Box>





    )
}
