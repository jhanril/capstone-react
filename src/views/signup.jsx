import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axiosClient from "../axios.js";
import { useStateContext } from "../contexts/ContextProvider";

function Signup() {
    const { setCurrentUser, setUserToken, userToken } = useStateContext();

    if (userToken) {
        return <Navigate to="/dashboard" />;
    }

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState({ __html: "" });

    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });

        axiosClient
            .post("/signup", {
                firstname: firstName,
                lastname: lastName,
                role,
                email,
                password,
                password_confirmation: passwordConfirmation,
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
                    // console.log(finalErrors);
                    setError({ __html: finalErrors.join("<br>") });
                }
                console.error(error);
            });
    };
    return (
        <>
            <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-3">Sign up now</h2>
                <p className="mb-5">
                    or{" "}
                    <Link to="/login" className="mb-5">
                        login with your account
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
                        <select
                            className="form-select"
                            id="role"
                            name="role"
                            required
                            value={role}
                            onChange={(ev) => setRole(ev.target.value)}
                        >
                            <option value="admin">Select type</option>
                            {/* <option value="applicant">Applicant</option>
                            <option value="employer">Employer</option> */}
                            <option value="admin" selected>
                                Admin
                            </option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    id="first-name"
                                    name="firstname"
                                    required
                                    value={firstName}
                                    onChange={(ev) =>
                                        setFirstName(ev.target.value)
                                    }
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    id="last-name"
                                    name="lastname"
                                    required
                                    value={lastName}
                                    onChange={(ev) =>
                                        setLastName(ev.target.value)
                                    }
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            className="form-control"
                            placeholder="Enter email address"
                        />
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(ev) =>
                                        setPassword(ev.target.value)
                                    }
                                    className="form-control"
                                    placeholder="Enter Password"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <input
                                    type="password"
                                    id="password-confirmation"
                                    name="password_confirmation"
                                    required
                                    value={passwordConfirmation}
                                    onChange={(ev) =>
                                        setPasswordConfirmation(ev.target.value)
                                    }
                                    className="form-control"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block mb-4"
                        >
                            Create Account
                        </button>
                    </div>

                    <div className="text-center">
                        <p>or sign up with:</p>
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
        </>
    );
}

export default Signup;
