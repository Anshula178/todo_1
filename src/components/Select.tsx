import React from 'react'
interface selectProps{
    children: React.ReactNode;
     value: string;
     disabled?:boolean;
     onChange: (event: any) => void;
}
const Select:React.FC<selectProps> = ({children,value,onChange, disabled}) => {

  return (
    <select value={value} disabled={disabled} className={` bg-slate-700 text-slate-400 px-2 py-1 rounded-md ${disabled===true?"bg-gray-400 text-slate-200 cursor-not-allowed border-gray-500":""}`} onChange={onChange}>
    {children}
  </select>
  )
}

export default Select
