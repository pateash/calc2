import React from 'react';
import styles from "./Button.css"; // css modules are enabled

// @flow

type Props= {
  children: string,
  onButtonPressed: any // passing value of button here
};

const Button=(props: Props)=>{
  const classes= `${styles.button} flex-no-wrap`;

  return (
    <button className={classes}
            onClick={()=>props.onButtonPressed(props.children)}>
      {props.children}
    </button>
  )
}

export default Button;
