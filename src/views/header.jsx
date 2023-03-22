import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/header.css";
import logo from "../assets/img/logo.png";
import axiosClient from "../axios";
import { useStateContext } from "../contexts/ContextProvider";

function Header() {
    const [navbarlinks, setNavbarlinks] = useState([]);

    useEffect(() => {
        setNavbarlinks(document.querySelectorAll("#navbar .scrollto"));
    }, []);

    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return;
            let section = document.querySelector(navbarlink.hash);
            if (!section) return;
            if (
                position >= section.offsetTop &&
                position <= section.offsetTop + section.offsetHeight
            ) {
                navbarlink.classList.add("active");
            } else {
                navbarlink.classList.remove("active");
            }
        });
    };

    const scrollto = (el) => {
        let header = document.querySelector("#header");
        let offset = header.offsetHeight;

        if (!header.classList.contains("header-scrolled")) {
            offset -= 20;
        }

        let elementPos = document.querySelector(el).offsetTop;
        window.scrollTo({
            top: elementPos - offset,
            behavior: "smooth",
        });
    };

    // const toggleMobileNav = () => {
    //     document.querySelector("#navbar").classList.toggle("navbar-mobile");
    // };

    // const toggleBacktotop = () => {
    //     if (window.scrollY > 100) {
    //         document.querySelector(".back-to-top").classList.add("active");
    //     } else {
    //         document.querySelector(".back-to-top").classList.remove("active");
    //     }
    // };

    useEffect(() => {
        navbarlinksActive();
        window.addEventListener("scroll", navbarlinksActive);

        const selectHeader = document.querySelector("#header");

        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add("header-scrolled");
            } else {
                selectHeader.classList.remove("header-scrolled");
            }
        };
        headerScrolled();
        window.addEventListener("scroll", headerScrolled);

        const navbarMobileToggle = document.querySelector(".mobile-nav-toggle");

        if (navbarMobileToggle) {
            navbarMobileToggle.addEventListener("click", (e) => {
                e.preventDefault;
                document
                    .querySelector("#navbar")
                    .classList.toggle("navbar-mobile");
            });
        }
    }, [navbarlinks]);

    const { setCurrentUser, setUserToken } = useStateContext();
    const logout = (ev) => {
        ev.preventDefault();
        axiosClient.post("/logout").then((res) => {
            setCurrentUser({});
            setUserToken(null);
        });
    };
    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center header-container">
                    <div className="logo me-auto">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} height="70" alt="logo" />
                        </Link>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li>
                                <Link
                                    to="/dashboard"
                                    className="nav-link scrollto active"
                                >
                                    Dashboard
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    to="/profile"
                                    className="nav-link scrollto active"
                                >
                                    Profile
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    to="/jobs"
                                    className="nav-link scrollto active"
                                >
                                    Jobs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/events"
                                    className="nav-link scrollto active"
                                >
                                    Events
                                </Link>
                            </li>
                            <Link
                                to="/jobs-stages"
                                className="nav-link scrollto active"
                            >
                                Job stages
                            </Link>
                            <Link
                                to="/events-stages"
                                className="nav-link scrollto active"
                            >
                                Event stages
                            </Link>
                            <li style={{ visibility: "hidden" }}>
                                <a href="blog.html">Spacer man</a>
                            </li>
                            <li className="dropdown">
                                <a href="#">
                                    <span>Account</span>
                                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">Change Password</a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            onClick={(ev) => logout(ev)}
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    </nav>
                </div>
            </header>
            <main id="main" style={{ minHeight: "100vh" }}>
                <section
                    id="content"
                    className="content"
                    style={{ padding: "0!important" }}
                >
                    <div className="container-fluid">
                        <div className="row">
                            <Outlet />
                        </div>
                    </div>
                </section>
            </main>
            <a
                href="#"
                className="back-to-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short"></i>
            </a>
        </>
    );
}

export default Header;
