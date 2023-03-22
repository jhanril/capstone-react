import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <section className="text-center text-lg-start">
            <div className="container py-4">
                <div className="row g-0 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div
                            className="card cascading-right"
                            style={{
                                background: "hsla(0, 0%, 100%, 0.55)",
                                backdropFilter: " blur(30px)",
                            }}
                        >
                            <Outlet />
                        </div>
                    </div>

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <img
                            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                            className="w-100 h-100 rounded-4 shadow-4"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AuthLayout;
