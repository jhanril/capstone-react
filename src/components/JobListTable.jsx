import React from "react";
import { Link } from "react-router-dom";

function JobListTable({ job, onDeleteClick }) {
    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const timeOptions = {
        hour: "numeric",
        minute: "2-digit",
    };
    const formattedDate = new Date(job.created_at).toLocaleString(
        "en-US",
        dateOptions
    );
    const formattedTime = new Date(job.created_at).toLocaleString(
        "en-US",
        timeOptions
    );
    const dateAndTime = `${formattedDate} : ${formattedTime.toLowerCase()}`;

    return (
        <>
            <tr className="bg-blue">
                <td className="pt-3">
                    <div className="pl-lg-5 pl-md-3 pl-1 name">
                        {job.company_name}
                    </div>
                </td>
                <td className="pt-3 mt-1">{job.job_type}</td>
                <td className="pt-3">{dateAndTime}</td>
                <td className="pt-3">
                    {job.status ? (
                        <span className="fa fa-check pl-3"></span>
                    ) : (
                        <span className="fa fa-x pl-3"></span>
                    )}
                </td>
                <td className="pt-3 d-flex justify-content-evenly">
                    <Link to={`/job/edit/${job.id}`}>
                        <i className="bi bi-pencil-square"></i>
                    </Link>
                    <span onClick={() => onDeleteClick(job.id)}>
                        <i className="bi bi-trash"></i>
                    </span>
                </td>
            </tr>
            <tr id="spacing-row">
                <td></td>
            </tr>
        </>
    );
}

export default JobListTable;
