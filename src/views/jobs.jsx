import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios";
import JobListItem from "../components/JobListItem";
import { useStateContext } from "../contexts/ContextProvider";

function Jobs() {
    // const { jobs } = useStateContext();
    const [jobs, setJobs] = useState([]);
    // console.log(jobs);

    useEffect(() => {
        axiosClient.get("job").then(({ data }) => {
            setJobs(data.data);
            // console.log(data.data);
        });
    }, []);
    const limit =
        jobs.length >= 6 && window.location.pathname !== "/jobs"
            ? 6
            : undefined;

    jobs.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <>
            <div className="container">
                <div className="row">
                    {jobs.slice(0, limit).map((job) => (
                        <JobListItem job={job} key={job.id} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Jobs;
