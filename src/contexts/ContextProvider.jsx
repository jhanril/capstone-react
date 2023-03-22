import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    jobs: [],
    setCurrentUser: () => {},
    setUserToken: () => {},
});

const tmpJobs = [
    {
        id: 1,
        title: "Front-end Developer",
        type: "Full-time",
        category: "Information Technology",
        skills: ["React", "JavaScript", "HTML", "CSS"],
        description:
            "We are looking for a talented front-end developer to join our team and help build amazing web applications.",
        expiry_date: "2023-05-31",
        salary_from: 50000,
        salary_to: 80000,
        career_level: "Mid-Level",
        tag: "Web Development",
        position: "2",
        experience: "3-5 years",
        status: "Active",
    },
    {
        id: 2,
        title: "Full-stack Developer",
        type: "Part-time",
        category: "Information Technology",
        skills: ["React", "Node.js", "MongoDB"],
        description:
            "We are looking for a full-stack developer to help us create awesome web applications.",
        expiry_date: "2023-06-30",
        salary_from: 60000,
        salary_to: 90000,
        career_level: "Senior",
        tag: "Web Development",
        position: "1",
        experience: "5+ years",
        status: "Active",
    },
    {
        id: 3,
        title: "Software Engineer",
        type: "Full-time",
        category: "Engineering",
        skills: ["Java", "Python", "C++"],
        description:
            "We are seeking a talented software engineer to join our team and help us create innovative software solutions.",
        expiry_date: "2023-07-31",
        salary_from: 70000,
        salary_to: 100000,
        career_level: "Director",
        tag: "Software Engineering",
        position: "3",
        experience: "8+ years",
        status: "Active",
    },
];

export const ContextProvider = ({ children }) => {
    const [currentUser, _setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || {}
    );

    const [userToken, _setUserToken] = useState(
        localStorage.getItem("TOKEN") || ""
    );

    const [jobs, setJobs] = useState(tmpJobs);

    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem("TOKEN", token);
        } else {
            localStorage.removeItem("TOKEN");
        }
        _setUserToken(token);
    };

    const setCurrentUser = (newUser) => {
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        _setCurrentUser(newUser);
    };

    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                setUserToken,
                jobs,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
