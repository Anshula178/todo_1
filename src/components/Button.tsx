import React from 'react'

interface buttonProps{
    text:string,
    isActive?:boolean,
    onClick:()=>void
}
const Button:React.FC<buttonProps> = ({text,isActive,onClick}) => {
   
  return (
    <button
    className={` text-slate-400  hover:text-blue-400 hover:border-2 border-blue-700  rounded-lg px-2 py-2 ml-2 ${isActive ? '    border-b-2 boder  border-blue-700' : ''}`}
    onClick={onClick}
    >
        {text}
    </button>
  );
}

export default Button
