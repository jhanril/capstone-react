import React from "react";
import { Link } from "react-router-dom";

function formatDate(dateString) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    const date = new Date(dateString);
    date.setDate(date.getDate() - 1);

    return date.toLocaleDateString("en-US", options);
}

function EventListTable({ event, onDeleteClick }) {
    return (
        <>
            <tr className="bg-blue">
                <td className="pt-3">
                    <div className="pl-lg-5 pl-md-3 pl-1 name">
                        {event.event_name}
                    </div>
                </td>
                <td className="pt-3 mt-1">{event.location}</td>
                <td className="pt-3">{formatDate(event.start_date)}</td>
                <td className="pt-3 d-flex justify-content-evenly">
                    <Link to={`/event/edit/${event.id}`}>
                        <i className="bi bi-pencil-square"></i>
                    </Link>
                    <span onClick={() => onDeleteClick(event.id)}>
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

export default EventListTable;
