import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import './JobDetails.css'
import { JobsContext } from '../../App';
import { addToDB } from '../../../public/fakeDB';

const JobDetails = () => {
    const jobID = parseInt(useLoaderData());
    const { jobs } = useContext(JobsContext);

    const job = jobs.find(jb => jb.id === jobID);

    return (
        <div className='job-details-wrapper'>
            <div className="job-details-main-section">
                <p className="description">
                    <span>Job Description: </span> {job.description}
                </p>
                <p className="description">
                    <span>Job Responsibility: </span>
                    {
                        job.responsibilities.join('. ')
                    }.
                </p>
                <p className="description">
                    <span>Educational Requirements: </span>  {job.education}.
                </p>
                <p className="description">
                    <span>Experiences: </span> {job.experience}.
                </p>
            </div>

            <div className="job-details-sidebar">
                <h1 className="job-details-title">Job Details</h1>
                <hr />
                <div className="job-details-info-container">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Salary :</span>
                        {job.salary}
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>

                        <span>Job Title :</span>
                        {job.title}
                    </p>
                </div>


                <div className="job-details-contact">
                    <h1 className="job-details-title">Contact Information</h1>
                    <hr />
                    <div className="job-details-info-container">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <span>Phone :</span>
                            {job.contact.phone}
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <span>Email :</span>
                            {job.contact.email}
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span>Address :</span>
                            {job.location}
                        </p>
                    </div>
                </div>

                <button className="btn-primary job-apply-btn" onClick={() => addToDB(job)}>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;