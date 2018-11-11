import React from 'react';
import styles from "./Button.css"; // css modules are enabled

// @flow

type Props= {
  children: string
};

const Button=(props: Props)=>{
  const classes= `${styles.button} flex-no-wrap`;

  return  (
    <button className={classes}>
      {props.children}
    </button>
  )
}

export default Button;
