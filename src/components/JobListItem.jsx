import React from "react";
import { Link } from "react-router-dom";
import JobView from "../views/jobView";

function JobListItem({ job }) {
    const currentPath = window.location.pathname;
    const isJobView = currentPath.startsWith("/job-openings");

    console.log(currentPath);

    const getTimeAgo = (timestamp) => {
        const date = new Date(timestamp);
        const timeAgo =
            Math.floor((new Date() - date) / (1000 * 60 * 60)) + " hours ago";
        return timeAgo;
    };
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="category mb-30">
                    <div className="job">
                        <span className="colors1 mb-4">Urgent Hiring</span>
                        <h4>
                            <a href="#" className="fw-bold">
                                {job.company_name}
                            </a>
                        </h4>
                        <ul className="place mt-4">
                            <li>
                                <p>
                                    <i className="fas fa-map-marker-alt pe-2"></i>{" "}
                                    {job.location}
                                </p>
                            </li>
                            <li>
                                <p className="ps-5">
                                    <i className="fas fa-map-marker-alt pe-2"></i>
                                    {job.job_type}
                                </p>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="left fw-bold">
                                {isJobView ? (
                                    <Link
                                        to={`/job-openings/job/view/${job.id}`}
                                        className="text-decoration-none"
                                    >
                                        VIEW JOB
                                    </Link>
                                ) : (
                                    <Link
                                        to={`/job/view/${job.id}`}
                                        className="text-decoration-none"
                                    >
                                        VIEW JOB
                                    </Link>
                                )}
                            </div>
                            <span className="time fw-bold">
                                {getTimeAgo(job.created_at)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobListItem;
