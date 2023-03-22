import React, { useEffect, useState } from "react";

function EventListItem({ event }) {
    const [day, setDay] = useState("");

    useEffect(() => {
        const date = new Date(event.start_date);
        setDay(date.toLocaleDateString("en-US", { weekday: "long" }));
    }, [event.start_date]);

    function formatDate(dateString) {
        const dateObj = new Date(dateString);
        const month = dateObj.toLocaleString("default", { month: "long" });
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        return `${month} ${day}, ${year}`;
    }
    return (
        <>
            <div className="col-md-4">
                <div className="main-card mb-3 card">
                    <div className="card-header">
                        <hr />
                        <h5 className="fw-bold">{event.event_name}</h5>
                        <hr />
                        <small>
                            {formatDate(event.start_date)} | {day}
                        </small>
                    </div>
                    <div className="card-body" style={{ minHeight: "200px" }}>
                        <div className="tab-content">
                            <div>
                                <p
                                    style={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        height: "170px",
                                    }}
                                >
                                    {event.event_description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-block text-center card-footer">
                        <a href="" className="text-decoration-none">
                            {" "}
                            VIEW Event
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventListItem;
