import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Events from "../views/events";
import Jobs from "../views/jobs";

function PageLayout() {
    const currentPath = window.location.pathname;

    const isJobs = currentPath === "/jobs";
    const isEvents = currentPath === "/events";

    const [headerTitle, setHeaderTitle] = useState("");
    const [toLink, setToLink] = useState("");

    useEffect(() => {
        if (isJobs) {
            setHeaderTitle("Create New Job");
            setToLink("/jobs/create");
        }
        if (isEvents) {
            setHeaderTitle("Create New Event");
            setToLink("/events/create");
        }
    }, []);
    return (
        <div className="container mt-5 mb-3">
            <div className="container px-5">
                <div className="container">
                    <div className="mt-5 mb-3">
                        <div className="add-items d-flex justify-content-between">
                            <h4>{headerTitle}</h4>
                            <Link
                                to={toLink}
                                className="add btn btn-primary font-weight-bold todo-list-add-btn"
                            >
                                Add
                            </Link>
                        </div>
                    </div>
                    <hr className="mt-0 mb-4" />
                </div>
                {isJobs ? <Jobs /> : isEvents ? <Events /> : null}
            </div>
        </div>
    );
}

export default PageLayout;
