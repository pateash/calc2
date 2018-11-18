// @flow
import React from 'react';
import InputOutput from '../components/InputOutput/InputOutput';
import Buttons from '../components/Buttons/Buttons';
import CalculatorService from '../services/CalculatorService';

// we can supply Props type using Props
type Props={

};


// and can supply state types using State
type State={
  inputValue: string,
  outputValue: string,
  buttons: Array<string>
};


export default class Home extends React.Component<Props,State>{
  state={
    inputValue: "0", // initial value is set to 0,
    outputValue: "0", // Output value is set to 0,

    // following buttons will be rendered
    buttons: ['1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','+','-','*','/','%','C','<<']
  };

  controlButtons = ['C','<<'];

  onInputChangeHandler=(event: any)=>{
    const inputValue=event.target.value.trim(); // always trim the input before passing it to eval(), works anyway but better
    const outputValue=CalculatorService.eval(inputValue);
    this.setState({inputValue,outputValue});
  };

  onButtonsPressedHandler=(buttonValue: string, event: any)=>{
    if(this.controlButtons.indexOf(buttonValue)!==-1){ // if this button is Special/Control button, then Handle differently
      this.handleControlButton(buttonValue,event);
      return;
    }

    let {inputValue}=this.state;
    inputValue= (inputValue === '0' && !isNaN(buttonValue))? buttonValue : inputValue+buttonValue;

    const outputValue=CalculatorService.eval(inputValue);
    this.setState({inputValue,outputValue});
  };

  handleControlButton(buttonValue: string, event: any) {
    let {inputValue,outputValue}=this.state;

    switch(buttonValue){
      case 'C':
        console.log("C");
         inputValue=0;
         outputValue=0;
         break;
      case '<<':
          console.log("<<");
         inputValue=inputValue.slice(0,-1); // get input removing last character
         outputValue=CalculatorService.eval(inputValue);
         break;
      default:
        console.error("Unknown control Button");
    }
    this.setState({ inputValue, outputValue});
  }

  render(){
    return (
      <div className="h-screen" >
        <InputOutput onInputChange={this.onInputChangeHandler}
                     inputValue={this.state.inputValue}
                     outputValue={this.state.outputValue}/>
        <Buttons buttons={this.state.buttons} onButtonsPressed={(buttonValue: string)=>this.onButtonsPressedHandler(buttonValue)}/>
      </div>
    );
  }
}

