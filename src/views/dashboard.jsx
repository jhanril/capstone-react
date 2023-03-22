import Events from "./events";
import Jobs from "./jobs";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <>
            <div className="container">
                <div className="container mt-5 mb-3">
                    <div className="mt-5 mb-3">
                        <div className="add-items d-flex justify-content-between">
                            <h4>Browse Jobs</h4>
                            <Link
                                to="/jobs"
                                className="add btn btn-success font-weight-bold todo-list-add-btn"
                            >
                                View all Jobs
                            </Link>
                        </div>
                    </div>
                    <hr className="mt-0 mb-4" />

                    <Jobs />
                </div>
                <div className="container mt-5 mb-3">
                    <div className="mt-5 mb-3">
                        <div className="add-items d-flex justify-content-between">
                            <h4>Browse Events and Trainings</h4>
                            <Link
                                to="/success"
                                className="add btn btn-primary font-weight-bold todo-list-add-btn"
                            >
                                View all Events
                            </Link>
                        </div>
                    </div>
                    <hr className="mt-0 mb-4" />

                    <Events />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
