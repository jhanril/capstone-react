import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";

function Login() {
    const { setCurrentUser, setUserToken, userToken } = useStateContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/login", {
                email,
                password,
            })
            .then(({ data }) => {
                // console.log(data);
                setCurrentUser(data.user);
                setUserToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    const finalErrors = Object.values(
                        error.response.data.errors
                    ).reduce((accum, next) => [...next, ...accum], []);
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };

    if (userToken) {
        return <Navigate to="/dashboard" />;
    }
    return (
        <div className="card-body p-5 shadow-5 text-center">
            <h2 className="fw-bold mb-3">Sign in now</h2>
            <p className="mb-5">
                or{" "}
                <Link to="/signup" className="mb-5">
                    sign up for free
                </Link>
            </p>

            {error.__html && (
                <div
                    className="bg-danger rounded py-2 px-3 mb-4 text-start text-white"
                    dangerouslySetInnerHTML={error}
                ></div>
            )}

            <form onSubmit={onSubmit} action="#" method="POST">
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(ev) => setEmail(ev.target.value)}
                        className="form-control"
                        placeholder="Enter email address"
                    />
                </div>
                <div className="form-outline mb-4">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}
                        className="form-control"
                        placeholder="Enter Password"
                    />
                </div>

                <div className="row">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                    >
                        Sign in
                    </button>
                </div>

                <div className="text-center">
                    <p>or sign in with:</p>
                    <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                    >
                        <i className="fab fa-google"></i>
                    </button>

                    <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                    >
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                    >
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
