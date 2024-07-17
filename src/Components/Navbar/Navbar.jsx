import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [focusedLink, setFocusedLink] = useState("");

    const handleFocus = (link) => {
        setFocusedLink(link);
    };

    // const handleBlur = () => {
    //     setFocusedLink("");
    // };

    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 px-5 fixed-top w-100 z-2">
                <div className="container px-5">
                    <Link className="navbar-brand text-uppercase fs-1 fw-bolder text-white" to="">start framework</Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 list-unstyled fw-bold text-uppercase fs-5 d-flex gap-4">
                            <li className="nav-item list-unstyled">
                                <Link
                                    className={`nav-link rounded-2 ${focusedLink === "about" ? "bg-secondary-color" : ""} text-white`}
                                    aria-current="page"
                                    to="about"
                                    onFocus={() => handleFocus("about")}
                                  
                                >
                                    about
                                </Link>
                            </li>
                            <li className="nav-item list-unstyled">
                                <Link
                                    className={`nav-link rounded-2 ${focusedLink === "portfolio" ? "bg-secondary-color" : ""} text-white`}
                                    to="portfolio"
                                    onFocus={() => handleFocus("portfolio")}
                                    
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li className="nav-item list-unstyled">
                                <Link
                                    className={`nav-link rounded-2 ${focusedLink === "contact" ? "bg-secondary-color" : ""} text-white`}
                                    to="contact"
                                    onFocus={() => handleFocus("contact")}
                                    
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
