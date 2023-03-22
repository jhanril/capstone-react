import "./landingpage.css";
import logo from "../../assets/img/logo.png";
import banner from "../../assets/img/hero-img.jpg";
import aboutUs from "../../assets/img/5471.png";
import localJobs from "../../assets/img/search.png";
import localSeminar from "../../assets/img/seminar.png";
import Footer from "../footer";
import { Link } from "react-router-dom";
function Landingpage() {
    return (
        <>
            <main className="main" id="top">
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
                <section className="pt-7" id="who-we-are">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 text-md-start text-center py-6">
                                <h1 className="mb-4 fs-9 fw-bold">
                                    Welcome Ka-Isla!
                                </h1>
                                <p className="mb-6 lead text-secondary">
                                    Looking for a Job? Racket? Sideline?
                                    Employee?{" "}
                                    <br className="d-none d-xl-block" />{" "}
                                    Seminar? Workshop? Training?
                                    <br className="d-none d-xl-block" />
                                    We got you!
                                </p>
                                <div className="text-center text-md-start">
                                    <a
                                        className="btn btn-warning me-3 btn-lg"
                                        href="#!"
                                        role="button"
                                    >
                                        Get started
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 text-end">
                                <img
                                    className="pt-7 pt-md-0 img-fluid"
                                    src={banner}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="pt-5"
                    id="what-we-do"
                    style={{ backgroundColor: "#FFF4EC" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="fs-10 fw-bold mt-5">About Us</h2>
                                <img
                                    className="img-fluid"
                                    src={aboutUs}
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-12 align-middle text-center ">
                                <p className=" fw-medium text-secondary">
                                    <br />
                                    We are a Catanduanes-based job board online
                                    community that helps jobseekers find jobs
                                    and aid employers and business owners locate
                                    their ideal candidates within the island.
                                    Student? Undergraduate? No experience? No
                                    problem! We help all kinds of people here.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-md-11 py-8" id="localjobs">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <img
                                    className="img-fluid"
                                    src={localJobs}
                                    alt=""
                                />
                            </div>
                            <div
                                className="col-lg-6 text-center"
                                style={{ paddingTop: "9%" }}
                            >
                                <h1 className="fw-bold mb-4 fs-7">
                                    Job Openings
                                </h1>
                                <p className="mb-5 text-info fw-medium">
                                    Get up to date about the Latest Job Openings
                                    around our Island
                                </p>
                                <Link
                                    to="/job-openings"
                                    className="btn btn-warning btn-md"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="py-md-11 py-8"
                    id="trainings"
                    style={{ backgroundColor: "#FFF4EC" }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div
                                className="col-lg-6 text-center"
                                style={{ paddingTop: "9%" }}
                            >
                                <h1 className="fw-bold mb-4 fs-7">
                                    Trainings & Workshops
                                </h1>
                                <p className="mb-5 text-info fw-medium">
                                    Explore and participate in the upcoming
                                    trainings and workshop around our island
                                </p>
                                <button className="btn btn-warning btn-md">
                                    Explore
                                </button>
                            </div>

                            <div className="col-lg-6 text-center">
                                <img
                                    className="img-fluid"
                                    src={localSeminar}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-center py-0">
                    <div className="container border-top py-3">
                        <div className="row justify-content-between">
                            <div className="col-lg-12 col-md-auto mb-1 mb-md-0">
                                <strong>
                                    <p className="mb-0">
                                        &copy; 2023 WD32P - TEAM2
                                    </p>
                                </strong>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Landingpage;
