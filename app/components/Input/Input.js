import React from 'react';

const Input=()=>{
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
      <div className="font-mono  text-white text-2xl min-w-full">Heading</div>
      <input type="text" style={style2}
             className=" font-mono text-right  text-white text-2xl min-w-full" value="1334*(3343+232342)"/>
      <div style={style3}
           className='font-mono text-right text-white text-4xl min-w-full'>=asdkfjdskjfds
      </div>
    </div>
    )
};

export default  Input;
