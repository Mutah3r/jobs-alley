import React, { useContext, useState } from 'react';
import { JobsContext } from '../../App';
import './FeaturedJobs.css'
import JobCard from '../JobCard/JobCard';

const FeaturedJobs = () => {
    const { jobs } = useContext(JobsContext);
    const [featuredJobs, setFeaturedJobs] = useState(jobs.slice(0, 4));
    const [allJobsCollapsed, setAllJobsCollapsed] = useState(false);

    const handleSeeAllJobsBtn = () => {
        allJobsCollapsed? setFeaturedJobs( jobs.slice(0, 4) ) : setFeaturedJobs(jobs); 
        setAllJobsCollapsed(!allJobsCollapsed);
    }

    return (
        <div className='featured-jobs-wrapper'>
            <h3 className='featured-jobs-title'>Featured Jobs</h3>
            <p className='featured-jobs-details'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="featured-job-cards">
                {
                    featuredJobs.map(job => <JobCard key={job.id} job={job} />)
                }
            </div>
            <div className="see-all-jobs">
                <button onClick={handleSeeAllJobsBtn} className="btn-primary">{allJobsCollapsed? "See Less" : "See All Jobs"}</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;