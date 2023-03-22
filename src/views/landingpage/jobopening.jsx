import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import Footer from "../footer";
import Jobs from "../jobs";

function JobOpening() {
    const currentPath = window.location.pathname;
    const isJobView = currentPath.startsWith("/job-openings/job/view/");

    return (
        <>
            <main className="main" id="top" style={{ height: "100dvh" }}>
                <nav
                    className="navbar navbar-expand-lg navbar-light sticky-top"
                    data-navbar-on-scroll="data-navbar-on-scroll"
                    style={{ backgroundColor: "#40e0d0" }}
                >
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} height="70" alt="logo" />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div
                            className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#who-we-are"
                                    >
                                        <strong>Who We Are</strong>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#what-we-do"
                                    >
                                        <strong>What We Do</strong>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#localjobs"
                                    >
                                        <strong>Job Openings</strong>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#trainings"
                                    >
                                        <strong>Trainings & Workshops</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {isJobView ? (
                    <Outlet />
                ) : (
                    <>
                        <div className="page-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="page-caption text-center">
                                            <h1 className="page-title">
                                                Job Openings
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-section" style={{ maxWidth: "100vw" }}>
                            <div class="container">
                                <div class="card-block bg-white mb30">
                                    <Jobs />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}

export default JobOpening;
