import React from "react";

function JobApply() {
    return (
        <>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="page-caption text-center">
                                <h1 class="page-title">Apply Job Form</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-section">
                <div class="container">
                    <div
                        class="card-block bg-white mb30"
                        style={{ paddingBottom: "80px" }}
                    >
                        <div className="mb-4">
                            {/* <div className="card-body"> */}
                            <form>
                                <input type="hidden" name="user_id" value="" />
                                <input type="hidden" name="status" value="" />
                                <div className="mb-3">
                                    <label
                                        className="small mb-1"
                                        htmlFor="fullName"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="form-control"
                                        id="fullName"
                                        type="text"
                                        placeholder="Enter FullName"
                                        value=""
                                    />
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputEmailAddress"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputEmailAddress"
                                            type="email"
                                            placeholder="Enter your email address"
                                            value=""
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputPhone"
                                        >
                                            Phone number
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputPhone"
                                            type="tel"
                                            placeholder="Enter your phone number"
                                            value=""
                                        />
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="select_type"
                                        >
                                            Educational Level
                                        </label>
                                        <select
                                            name="select_type"
                                            className="form-control"
                                            id="select_type"
                                            value=""
                                        >
                                            <option>Select type</option>
                                            <option value="College Graduate">
                                                College Graduate
                                            </option>
                                            <option value="College Undergraduate">
                                                College Undergraduate
                                            </option>
                                            <option value="Senior Highschool">
                                                Senior Highschool
                                            </option>
                                            <option value="Highschool">
                                                Highschool
                                            </option>
                                            <option value="Elementary">
                                                Elementary
                                            </option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="experience"
                                        >
                                            Experience
                                        </label>
                                        <input
                                            className="form-control"
                                            id="experience"
                                            name="experience"
                                            type="text"
                                            placeholder="Enter your years of experience"
                                            value=""
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 edit">
                                    <label
                                        htmlFor="message"
                                        className="small mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value=""
                                        placeholder="Enter your message why you want this job and and why you deserve it"
                                    ></textarea>
                                </div>

                                <button
                                    className="btn btn-primary float-end"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </form>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobApply;
