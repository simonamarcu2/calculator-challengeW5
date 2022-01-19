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
            <Button label={'+/-'} />
            <Button label={'0'} />
            <Button label={'='} />
          </div>
        </div>
      </div>
    );
  }
};

constructor() {

  super();

  this.state = {
    question: '',
    answer: ''
  }

  this.handleClick = this.handleClick.bind(this);
};

handleClick(Event); {
  const value = Event.target.value;
  switch (value) {
    case '=': {
      if (this.state.question !== '') {
        const ans = '';
        try {
          ans = eval(this.state.question);
        }
        catch (err) {
          this.setState({ answer: "Math Error" });
        }
        if (ans === undefined)
          this.setState({ answer: "Math Error" });

        // update answer in state.
        else
          this.setState({ answer: ans, question: '' });
        break;
      }
    }

    case 'Clear': {

      // if it's the Clears sign, just clean
      // question and answer in the state
      this.setState({ question: '', answer: '' });
      break;
    }

    case 'Delete': {
      var str = this.state.question;
      str = str.substr(0, str.length - 1);
      this.setState({ question: str });
      break;
    }

    default: {

      // for every other command, update the answer in the state
      this.setState({ question: this.state.question += value })
      break;
    }
  }
}
//export Calculator
export default Calculator;
handleClick = { this: handleClick }
