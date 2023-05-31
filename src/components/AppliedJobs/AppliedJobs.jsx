import React, { useContext, useEffect, useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import { JobsContext } from '../../App';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';
import { toast } from 'react-hot-toast';

const AppliedJobs = () => {
    const [showRemoteJob, setShowRemoteJob] = useState(true);
    const [showOnsiteJob, setShowOnsiteJob] = useState(true);

    const { jobs } = useContext(JobsContext);
    const appliedJobsID = useLoaderData();
    let appliedJobs = [];

    for (const id of appliedJobsID) {
        for (const job of jobs) {
            if (id === job.id) {
                appliedJobs.push(job);
            }
        }
    }

    let [filteredJobs, setFilteredJobs] = useState([...appliedJobs]);

    useEffect(() => {
        if (!showRemoteJob && !showOnsiteJob) {
            setFilteredJobs([]);
        }
        else {
            if (showRemoteJob && showOnsiteJob) {
                setFilteredJobs([...appliedJobs]);
            }
            else if (showRemoteJob) {
                const newFilteredJobs = appliedJobs.filter(job => job.remote === true);
                setFilteredJobs(newFilteredJobs);
            }
            else {
                const newFilteredJobs = appliedJobs.filter(job => job.remote === false);
                setFilteredJobs(newFilteredJobs);
            }
        }
    }, [showRemoteJob, showOnsiteJob])

    const handleShowRemoteCilckButton = () => {
        if(!showRemoteJob){
            toast('Remote Jobs Added To The List');
        }
        else{
            toast('Remote Jobs Removed from The List');
        }
        setShowRemoteJob(!showRemoteJob)
    }
    const handleShowOnsiteCilckButton = () => {
        if(!showOnsiteJob){
            toast('Onsite Jobs Added To The List');
        }
        else{
            toast('Onsite Jobs Removed From The List');
        }
        setShowOnsiteJob(!showOnsiteJob)
    }

    return (
        <>
            <div className="applied-job-sor-btn-container">
                <h1>Filter: </h1>
                <button onClick={handleShowRemoteCilckButton} className={`btn-primary sort-btn-1 ${showRemoteJob === false ? 'opacity-low' : ''}`}>Remote Jobs</button>
                <button onClick={handleShowOnsiteCilckButton} className={`btn-primary sort-btn-2 ${showOnsiteJob === false ? 'opacity-low' : ''}`}>On-Site Jobs</button>
            </div>
            {
                appliedJobsID.length === 0 && <h1 className='no-job-msg'>You have not applied for any job yet.</h1>
            }
            <div className='applied-jobs-wrapper'>
                {
                    filteredJobs.map(job => <AppliedJobCard key={job.id} job={job} />)
                }
            </div>
        </>
    );
};

export default AppliedJobs;