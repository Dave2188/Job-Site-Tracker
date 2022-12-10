import axios from "axios";

const url = "http://localhost:4000/jobs";
// const url = "https://job-site-traker-server.herokuapp.com/jobs";

export const fetchJobs = () => axios.get(url);

export const createJob = (newJob) => axios.post(url, newJob);

export const updateJob = (_id, updatedJob) => axios.patch(`${url}/${_id}`, updatedJob);

export const deleteJob = (_id) => axios.delete(`${url}/${_id}`);
