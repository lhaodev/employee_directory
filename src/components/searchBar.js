import React from "react";
//import "./navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const SearchBar = (props) => {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="language">Search Term:</label>
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Type in a name to search"
                    id="term"
                />
            </div>
        </form>
    );
}

export default SearchBar;


