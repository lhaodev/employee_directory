import React from "react";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (

        <div className="App">
            <h1>Employee Directory</h1>
            <p>
                Sort by clicking on the header of first name or last name
        </p>
        </div>

    );
}

export default Navbar;