import React from 'react';
import Button from "./Button/Button";

// @flow
type Props={
  buttons: Array<string>
};

const Buttons=(props: Props)=>{
  const style={
    backgroundColor: '#2c2e39',
    minHeight: '67%'
  };

  return (
    <div className="buttons h-2/3 flex flex-wrap" style={style}>
      {
        props.buttons.map((button,index)=><Button key={index}>{button}</Button>)
      }
    </div>
    );
};

export default  Buttons;
