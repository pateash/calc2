import React from 'react';
import Button from "./Button/Button";

// @flow
type Props={
  buttons: Array<string>,
  onButtonsPressed: any // here passing value of button to upper level
};

const Buttons=(props: Props)=>{
  const style={
    backgroundColor: '#2c2e39',
    minHeight: '67%'
  };

  return (
    <div className="buttons h-2/3 flex flex-wrap" style={style}>
      {
        props.buttons.map((button,index)=>
          <Button key={index}
                  onButtonPressed={(buttonValue: string)=>props.onButtonsPressed(buttonValue)}>
            {button}</Button>)
      }
    </div>
    );
};

export default  Buttons;
