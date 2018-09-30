// @flow
import React from 'react';
import Input from '../components/Input/Input';
import Buttons from '../components/Buttons/Buttons';


// we can supply Props type using Props
type Props={

};


// and can supply state types using State
type State={
  inputValue: string
};


export default class Home extends React.Component<Props,State>{
  state={
    inputValue:"0"// initial value is set to 0
  };

  onInputChangeHandler=(event: any)=>{
    console.log(event);
    const inputValue=event.target.value;
    this.setState({inputValue});
  };

  render(){
    return (
      <div className="h-screen" >
         <Input onInputChange={this.onInputChangeHandler}
                inputValue={this.state.inputValue}/>
        <Buttons/>
      </div>
    );
  }
}
