// @flow

import React from 'react';

type Props={
   inputValue: string
};


const Input=(props: Props)=>{
  const backgroundColor='#403759';

  const style1={
    minHeight:'33%',
    backgroundColor
  };
  const style2={
    border:'none',
    backgroundColor
  };
  const style3={
    border:'none',
    backgroundColor,
  };

  return (
    <div className="field flex flex-wrap" style={style1}>
      <div className="font-mono  text-white text-2xl min-w-full">Calc2</div>
      <input type="text" style={style2}
             className="font-mono text-right  text-white text-2xl min-w-full"
             onChange={props.onInputChange}
             value={props.inputValue}/>

      <div style={style3}
           className='font-mono text-right text-white text-4xl min-w-full'>=asdkfjdskjfds
      </div>
    </div>
    )
};

export default  Input;
