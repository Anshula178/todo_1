import React from 'react'

interface buttonProps{
    text:string,
    isActive:boolean,
    onClick:()=>void
}
const Button:React.FC<buttonProps> = ({text,isActive,onClick}) => {
   
  return (
    <button
    className={`bg-blue-700 text-white rounded-lg px-2 py-2 ml-2 ${isActive ? ' text-blue-950 bg-white  border-2 border-blue-700' : ''}`}
    onClick={onClick}
    >
        {text}
    </button>
  );
}

export default Button
