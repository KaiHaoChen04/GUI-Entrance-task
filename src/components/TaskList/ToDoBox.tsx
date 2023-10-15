import React from "react";

function Box() {
    return (
        <div className="styled-input">
            <label htmlFor="name">Enter ToDo's:</label>
            <input type="text" id="last name" style={{ width: "250px" }} />
        </div>
    );
}

export default Box;
