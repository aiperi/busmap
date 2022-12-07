import React from "react";

const Checkbox = ({ id, type, name, handleClick, isChecked }) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            onChange={handleClick}
            checked={isChecked}
            // onClick={handleClick}
        />
    );
};

export default Checkbox;