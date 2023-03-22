import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../axios";
import "../assets/jobview.css";

function JobView() {
    const { id } = useParams();
    const currentPath = window.location.pathname;
    const isJobView = currentPath.startsWith("/job/view/");

    const [job, setJob] = useState({
        company_name: "",
        created_at: "",
        description: "",
        email: "",
        id: "",
        job_type: "",
        location: "",
        phone: "",
        status: true,
        updated_at: "",
        user_id: "",
    });
    useEffect(() => {
        if (id) {
            // setLoading(true);
            axiosClient.get(`/job/${id}`).then(({ data }) => {
                setJob(data.data);
                console.log(data.data);
            });
        }
    }, []);
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="page-caption text-center">
                                <h1 className="page-title">
                                    {job.company_name}
                                </h1>
                                <Link
                                    to={`/job/view/apply/${job.id}`}
                                    type="submit"
                                    value="Apply For This Job"
                                    className="btn btn-success rounded-pill btn-addpad mt-5"
                                >
                                    APPLY FOR THIS JOB
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-section">
                <div className="container">
                    <div className="card-block bg-white mb30">
                        {/* {isJobView ? ( */}
                        <div className="row">
                            <div className="text-area">
                                <div className="container">
                                    <hr />
                                    <div className="row d-flex align-items-center">
                                        <div className="col-md-6">
                                            <h3>Job Overview</h3>
                                        </div>
                                        <ul className="col-md-6 place mt-3">
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
                                    </div>

                                    <hr />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <textarea
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="10"
                                                style={{
                                                    width: "100%",
                                                    height: "100dvh",
                                                    border: "none",
                                                    outline: "none",
                                                }}
                                                readOnly
                                                value={job.description}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ) : null} */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobView;
