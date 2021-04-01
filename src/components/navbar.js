import React from "react";
//import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand">
                Employee Directory
                </div>
            <div>

                <p className="lead">Search by name or sort the column by .</p>
            </div>
        </nav >
    );
}

export default Navbar;