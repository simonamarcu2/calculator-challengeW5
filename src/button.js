import React from "react";

//create a functional button component

const Button = (props) => {
  return (
    <input
      type="button"
      value={props.label}
    />
  )
}

//export the button component
export default Button;
