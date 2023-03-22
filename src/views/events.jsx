import { useEffect, useState } from "react";
import axiosClient from "../axios";
import EventListItem from "../components/EventListItem";

function Events() {
    // const { events } = useStateContext();
    const [events, setEvents] = useState([]);
    // console.log(events);

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
    const limit =
        events.length >= 6 && window.location.pathname !== "/events"
            ? 6
            : undefined;
    events.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return (
        <>
            <div className="row">
                {events.slice(0, limit).map((event) => (
                    <EventListItem event={event} key={event.id} />
                ))}
            </div>
        </>
    );
}

export default Events;
