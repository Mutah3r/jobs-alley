import { toast } from "react-hot-toast";

const addToDB = (job) => {
    const previouslyAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs'));

    if(!previouslyAppliedJobs){
        const newAppliedJobs = [job.id];
        localStorage.setItem('appliedJobs', JSON.stringify(newAppliedJobs));
        toast('Applied Successfully!')
        return;
    }
    
    if(!previouslyAppliedJobs.includes(job.id)){
        const newAppliedJobs = [...previouslyAppliedJobs, job.id];
        localStorage.setItem('appliedJobs', JSON.stringify(newAppliedJobs));
        toast('Applied Successfully!')
        return;
    }

    // other already applied to this job
    // alert('you have already applied to this job');
    toast('You have already applied for this job!')
}

const getAppliedJobs = () => {
    const data = JSON.parse(localStorage.getItem('appliedJobs'));

    return data? data : [];
};


export {addToDB, getAppliedJobs}