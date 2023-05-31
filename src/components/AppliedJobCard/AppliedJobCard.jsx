import React from 'react';
import { Link } from 'react-router-dom'
import './AppliedJobCard.css'

const AppliedJobCard = ({ job }) => {
    return (
        <div className='job-card-wrapper'>
            <div className="job-card-logo-container">
                <img draggable={false} src={job.logo} alt="" className="job-card-logo" />
            </div>
            <h1 className="job-card-title">{job.title}</h1>
            <p className="job-card-company">{job.company}</p>
            <div className="applied-job-details-btns">
                <div className="applied-job-info-btns">
                    <button className="btn-secondary">{job.remote ? "Remote" : "Onsite"}</button>
                    <button className="btn-secondary">{job.fulltime ? "Full Time" : "Part Time"}</button>
                </div>
                <div className="applied-job-details-btns">
                    <Link to={`/job/${job.id}`}>
                        <div className="btn-primary job-card-btn">View Details</div>
                    </Link>
                </div>
            </div>
            <div className="job-card-details-container">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    {job.location}
                </span>

                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    Salary : {job.salary}
                </span>
            </div>
        </div>
    );
};

export default AppliedJobCard;