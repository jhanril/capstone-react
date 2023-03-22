import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";
import Swal from "sweetalert2";
function EventForm() {
    const currentPath = window.location.pathname;
    const isEvents = currentPath === "/events/create";
    const isEventStage = currentPath.startsWith("/event/edit/");

    const [headerTitle, setHeaderTitle] = useState("");
    const [toLink, setToLink] = useState("");
    useEffect(() => {
        if (isEvents) {
            setHeaderTitle("Create New Event");
            setToLink("/events");
        }
        if (isEventStage) {
            setHeaderTitle("Update Event Details");
            setToLink("/events-stages");
        }
    }, []);

    const { id } = useParams();

    const { currentUser } = useStateContext();

    const [userId, setUserId] = useState(currentUser.id);
    const [eventName, setEventName] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [error, setError] = useState({ __html: "" });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setError("");

        // use axiosClient to make the post request
        let res = null;

        if (id) {
            res = axiosClient.put(`/event/${id}`, {
                user_id: userId,
                event_name: eventName,
                event_description: eventDescription,
                location,
                start_date: startDate,
                end_date: endDate,
            });
        } else {
            res = axiosClient.post(`/events/create`, {
                user_id: userId,
                event_name: eventName,
                event_description: eventDescription,
                location,
                start_date: startDate,
                end_date: endDate,
            });
        }

        res.then(({ data }) => {
            // handle successful response
            if (!id) {
                Swal.fire({
                    icon: "success",
                    title: "Event Created Successfully!",
                    showConfirmButton: true,
                    timer: 1500,
                });
                setEventName("");
                setEventDescription("");
                setLocation("");
                setStartDate("");
                setEndDate("");
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Event Details Update Successfully!",
                    showConfirmButton: true,
                    timer: 1500,
                });
            }
        }).catch((error) => {
            if (error.response) {
                const finalErrors = Object.values(
                    error.response.data.errors
                ).reduce((accum, next) => [...next, ...accum], []);
                setError({ __html: finalErrors.join("<br>") });
            }
            console.error(error);
        });
    };
    useEffect(() => {
        if (id) {
            // setLoading(true);
            axiosClient.get(`/event/${id}`).then(({ data }) => {
                setUserId(data.data.user_id);
                setEventName(data.data.event_name);
                setEventDescription(data.data.event_description);
                setLocation(data.data.location);
                setStartDate(data.data.start_date);
                setEndDate(data.data.end_date);
                // console.log(data.data);
            });
        }
    }, []);
    return (
        <>
            <div className="container mt-5 mb-3">
                <div className="container px-5">
                    <div className="container-xl px-4 mt-4">
                        <div className="mt-5 mb-3">
                            <div className="add-items d-flex justify-content-between">
                                <h4>{headerTitle}</h4>
                                <Link
                                    to={toLink}
                                    className="add btn btn-danger font-weight-bold todo-list-add-btn"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </div>
                        <hr className="mt-0 mb-4" />

                        {error.__html && (
                            <div
                                className="alert alert-danger"
                                dangerouslySetInnerHTML={error}
                            ></div>
                        )}

                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        Event Details
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <input
                                                type="hidden"
                                                name="user_id"
                                                value={userId}
                                            />
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="eventName"
                                                    className="form-label"
                                                >
                                                    Event Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="eventName"
                                                    name="eventName"
                                                    placeholder="Enter Event Name"
                                                    value={eventName}
                                                    onChange={(ev) =>
                                                        setEventName(
                                                            ev.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <label
                                                    htmlFor="eventDescription"
                                                    className="form-label"
                                                >
                                                    Event Description
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="eventDescription"
                                                    name="eventDescription"
                                                    rows="5"
                                                    placeholder="Enter Event Description"
                                                    value={eventDescription}
                                                    onChange={(ev) =>
                                                        setEventDescription(
                                                            ev.target.value
                                                        )
                                                    }
                                                ></textarea>
                                            </div>

                                            <div className="mb-3">
                                                <label
                                                    htmlFor="inputLocation"
                                                    className="form-label"
                                                >
                                                    Location
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputLocation"
                                                    name="location"
                                                    placeholder="Enter Location"
                                                    value={location}
                                                    onChange={(ev) =>
                                                        setLocation(
                                                            ev.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="row gx-3 mb-3">
                                                <div className="col-md-12">
                                                    <label className="form-label">
                                                        <h3>Date</h3>
                                                    </label>
                                                </div>
                                                <div className="col-md-6">
                                                    <label
                                                        htmlFor="inputStartDate"
                                                        className="form-label"
                                                    >
                                                        Start Date
                                                    </label>
                                                    <input
                                                        type="datetime-local"
                                                        className="form-control"
                                                        id="inputStartDate"
                                                        name="startDate"
                                                        placeholder="Enter Start Date"
                                                        value={
                                                            startDate
                                                                ? startDate
                                                                : ""
                                                        }
                                                        onChange={(ev) =>
                                                            setStartDate(
                                                                ev.target.value
                                                                    ? new Date(
                                                                          ev.target.value
                                                                      )
                                                                          .toISOString()
                                                                          .slice(
                                                                              0,
                                                                              19
                                                                          )
                                                                          .replace(
                                                                              "T",
                                                                              " "
                                                                          )
                                                                    : null
                                                            )
                                                        }
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label
                                                        htmlFor="inputEndDate"
                                                        className="form-label"
                                                    >
                                                        End Date
                                                    </label>
                                                    <input
                                                        type="datetime-local"
                                                        className="form-control"
                                                        id="inputEndDate"
                                                        name="endDate"
                                                        placeholder="Enter End Date"
                                                        value={
                                                            endDate
                                                                ? endDate
                                                                : ""
                                                        }
                                                        onChange={(ev) =>
                                                            setEndDate(
                                                                ev.target.value
                                                                    ? new Date(
                                                                          ev.target.value
                                                                      )
                                                                          .toISOString()
                                                                          .slice(
                                                                              0,
                                                                              19
                                                                          )
                                                                          .replace(
                                                                              "T",
                                                                              " "
                                                                          )
                                                                    : null
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-primary float-end"
                                            >
                                                {id
                                                    ? "Update Event"
                                                    : "Create Event"}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventForm;
