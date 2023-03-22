import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../assets/jobstage.css";
import axiosClient from "../axios";
import JobListTable from "../components/JobListTable";
function JobStages() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axiosClient
            .get("job")
            .then(({ data }) => {
                setJobs(data.data);
                // console.log(data.data);
            })
            .catch((error) => {
                console.log(error);
                // handle the error response here
            });
    }, []);

    const onDeleteClick = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosClient.delete(`/job/${id}`).then(() => {
                    // window.location.reload();
                    console.log("The Job was deleted");
                    setJobs(jobs.filter((job) => job.id !== id));
                });
            }
        });
    };
    return (
        <div className="container mt-5 mb-3">
            <div className="container px-5">
                <div className="container rounded mt-5 bg-table p-md-5">
                    <div className="h2 font-weight-bold">Jobs</div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Job Name</th>
                                    <th scope="col">Job type</th>
                                    <th scope="col">Date Created</th>
                                    <th scope="col">Status</th>
                                    <th scope="col" className="text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="py-2">
                                {jobs.map((job) => (
                                    <JobListTable
                                        onDeleteClick={onDeleteClick}
                                        job={job}
                                        key={job.id}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobStages;
