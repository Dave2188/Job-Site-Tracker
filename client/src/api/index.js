import axios from "axios";

const url = "http:localhost:4000/jobs";

export const fetchJobs = () => axios.get(url);
