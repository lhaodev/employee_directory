import React from "react";
import "./searchBar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const SearchBar = (props) => {
    return (
        <form className="search">
            <div class="form-group center-block" >
                {/* <label htmlFor="language">Search Term:</label> */}
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    type="text"
                    class="form-control center-block"
                    placeholder="Type in a name to filter"
                    id="term"
                />
            </div>
        </form>
    );
}

export default SearchBar;


