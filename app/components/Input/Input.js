import React from 'react';

const Input=()=>{
  const style1={
    minHeight:'33%'
  };
  const style2={
    border:'none',
    backgroundColor:'#403759'
  };
  return (
    <div className="field flex flex-nowrap" style={style1}>
      <input type="text" style={style2} className="min-w-full min-h-full"/>
    </div>
    )
};

export default  Input;
