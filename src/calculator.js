// mandatory step (import React)
import React from "react";
//imports
import CalculatorTitle from "./calculatorTitle";
import OutputScreen from "./outputScreen";
import Button from "./button";
// import { Component } from "react/cjs/react.production.min";

// Create Class component Calculator
class Calculator extends React.Component {
  render() {
    return (
      <div className="frame">
        <CalculatorTitle value="Calculator Calculating Calculations" />
        <div class="mainCalc">
          <OutputScreen />
          <div className="button-row">
            <Button label={'Clear'} />
            <Button label={'Delete'} />
            <Button label={'.'} />
            <Button label={'/'} />
          </div>
          <div className="button-row">
            <Button label={'7'} />
            <Button label={'8'} />
            <Button label={'9'} />
            <Button label={'*'} />
          </div>
          <div className="button-row">
            <Button label={'4'} />
            <Button label={'5'} />
            <Button label={'6'} />
            <Button label={'-'} />
          </div>
          <div className="button-row">
            <Button label={'1'} />
            <Button label={'2'} />
            <Button label={'3'} />
            <Button label={'+'} />
          </div>
          <div className="button-row">
            <Button label={'0'} />
            <Button label={'='} />
          </div>
        </div>
      </div>
    );
  }
}

//export Calculator
export default Calculator;
