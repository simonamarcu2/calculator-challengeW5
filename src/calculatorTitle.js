import React from "react";
// import Calculator from "./calculator";


//Create functional component
//props value

const CalculatorTitle = (props) => {
  return (
    <div className="calculator-title">
      {props.value}
    </div>
  )
}

//export calculator title
export default CalculatorTitle
