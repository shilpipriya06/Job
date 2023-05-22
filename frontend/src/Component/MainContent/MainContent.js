import React, { useEffect, useState } from 'react'
import "./MainContent.css"
import { Grid } from '@mui/material'
import Jobs from '../Jobs/Jobs'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function MainContent() {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        const disableBackNavigation = (event) => {
            event.preventDefault();
            navigate("/error");
        };

        document.addEventListener('popstate', disableBackNavigation);

        loadUsers()

        return () => {
            document.removeEventListener('popstate', disableBackNavigation);
        };
    }, [navigate]);

    //async await will make asyncronous as js excutes line by line. After 1 line is finished thn it ll go for nxt
    const loadUsers = async () => {
        const allJobs = await axios.get("http://localhost:8080/api/v1/jobs")

        //To display data on page we need to set all data
        setJobs(allJobs.data.object);
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={0}>

                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h1 className='mainContent_heading' >Posted Jobs</h1>
                        <input type='text' style={{ width: "200px", height: "50px", backgroundColor: "white", "borderRadius": "4px" }} placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
                    </div>
                    <div className='mainContent_jobList' >
                        {
                            jobs.filter(job => job.jobTitle.toLowerCase().includes(search)).map((job, index) => (
                                <Jobs key={job.id} jobTitle={job.jobTitle} experience={job.experience} skillSet={job.skillSet} location={job.location} mobileNo={job.mobileNo} description={job.description} />
                            ))
                        }
                        {/* <Jobs jobTitle="FullStack" experience="3+ yrs" skillSet="Java, sql, mongo, html, css, javascript" location="Bengaluru" mobileNo="9348526777" description="sx wb xjec ejc ejc ejc ec ejc ejc ejc" />
                        <Jobs jobTitle="JavaBackEnd" experience="3+ yrs" skillSet="Java, sql, mongo, html, css, javascript" location="Bengaluru" mobileNo="9348526777" description="sx wb xjec ejc ejc ejc ec ejc ejc ejc" />
                        <Jobs jobTitle="MERN" experience="3+ yrs" skillSet="Java, sql, mongo, html, css, javascript" location="Bengaluru" mobileNo="9348526777" description="sx wb xjec ejc ejc ejc ec ejc ejc ejc" />
                        <Jobs jobTitle="MEAN" experience="3+ yrs" skillSet="Java, sql, mongo, html, css, javascript" location="Bengaluru" mobileNo="9348526777" description="sx wb xjec ejc ejc ejc ec ejc ejc ejc" />
                        <Jobs jobTitle="Android Developer" experience="3+ yrs" skillSet="Java, sql, mongo, html, css, javascript" location="Bengaluru" mobileNo="9348526777" description="sx wb xjec ejc ejc ejc ec ejc ejc ejc" />
                        <Jobs jobTitle="React Native" experience="3+ yrs" skillSet="Java, sql, mongo, html, css, javascript" location="Bengaluru" mobileNo="9348526777" description="sx wb xjec ejc ejc ejc ec ejc ejc ejc" />
                        <Jobs jobTitle="SQL" experience="3+ yrs" skillSet="Java, sql, mongo, html, css, javascript" location="Bengaluru" mobileNo="9348526777" description="sx wb xjec ejc ejc ejc ec ejc ejc ejc" /> */}
                    </div>
                </Grid>
                <Grid item xs={0}>

                </Grid>
            </Grid>
        </div>
    )
}
