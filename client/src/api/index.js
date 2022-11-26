import axios from "axios";

// const url = "http://localhost:4000/jobs";
const url = "https://job-site-traker-server.herokuapp.com/jobs";

export const fetchJobs = () => axios.get(url);

export const createJob = (newJob) => axios.post(url, newJob);
