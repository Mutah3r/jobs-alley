export const loadJobData = async () => {
    const res = await fetch('/jobs.json');
    const data = res.json();

    return data;
}