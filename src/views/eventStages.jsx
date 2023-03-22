import { useEffect, useState } from "react";
import axiosClient from "../axios";
import Swal from "sweetalert2";
import EventListTable from "../components/EventListTable";

function EventStages() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axiosClient
            .get("event")
            .then(({ data }) => {
                setEvents(data.data);
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
                axiosClient.delete(`/event/${id}`).then(() => {
                    // window.location.reload();
                    console.log("The event was deleted");
                    setEvents(events.filter((event) => event.id !== id));
                });
            }
        });
    };
    return (
        <>
            <div className="container mt-5 mb-3">
                <div className="container px-5">
                    <div className="container rounded mt-5 bg-table p-md-5">
                        <div className="h2 font-weight-bold">Event</div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Event Name</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Date Start</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="py-2">
                                    {events.map((event) => (
                                        <EventListTable
                                            onDeleteClick={onDeleteClick}
                                            event={event}
                                            key={event.id}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventStages;
