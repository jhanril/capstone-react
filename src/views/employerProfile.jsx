import "../assets/employer.css";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function EmployerProfile() {
    return (
        <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">
                <div className="col-xl-4">
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
                        <div className="card-body text-center">
                            <img
                                className="img-account-profile rounded-circle mb-2"
                                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                                alt=""
                            />

                            <div className="small font-italic text-muted mb-4">
                                JPG or PNG no larger than 5 MB
                            </div>

                            <button className="btn btn-primary" type="button">
                                Upload new image
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="card mb-4">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        className="small mb-1"
                                        htmlFor="companyName"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        className="form-control"
                                        id="companyName"
                                        type="text"
                                        placeholder="CompanyName"
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
                                        />
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputLocation"
                                        >
                                            Specialization
                                        </label>
                                        <select
                                            name="select_box"
                                            className="form-control"
                                            id="select_box"
                                        >
                                            <option>
                                                Select Specialization
                                            </option>
                                            <option value="Web Development">
                                                Web Development
                                            </option>
                                            <option value="App Development">
                                                App Development
                                            </option>
                                            <option value="IT Securities">
                                                IT Securities
                                            </option>
                                            <option value="General IT Services">
                                                General IT Services
                                            </option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputLocation"
                                        >
                                            Location
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputLocation"
                                            type="text"
                                            placeholder="Enter your location"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3 edit">
                                    <label
                                        htmlFor="companyInfo"
                                        className="small mb-1"
                                    >
                                        Company Information
                                    </label>
                                    <Editor
                                        className="form-control"
                                        id="companyInfo"
                                        rows="3"
                                    ></Editor>
                                </div>
                                <div className="card-header">
                                    Social Media Links
                                </div>
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputPhone"
                                        >
                                            Facebook
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputPhone"
                                            type="text"
                                            placeholder="Facebook Link"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputBirthday"
                                        >
                                            Instagram
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputBirthday"
                                            type="text"
                                            name="text"
                                            placeholder="Instagram Link"
                                        />
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputPhone"
                                        >
                                            LinkedIn
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputPhone"
                                            type="text"
                                            placeholder="LinkedIn Link"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputBirthday"
                                        >
                                            Youtube
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputBirthday"
                                            type="text"
                                            name="text"
                                            placeholder="Youtube Link"
                                        />
                                    </div>
                                </div>

                                <button
                                    className="btn btn-primary"
                                    type="button"
                                >
                                    Save changes
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployerProfile;
