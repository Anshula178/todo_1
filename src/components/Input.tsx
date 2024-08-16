import React from 'react'
interface inputProps{
    type: string;
    value?: string;
    onChange: (event: any) => void; 
    placeholder?: string;
    checked?: boolean
   

}
const Input:React.FC<inputProps> = ({type,value,placeholder,onChange}) => {
  return (
    
      <input type={type} value={value} placeholder={placeholder} className={`flex-1 text-slate-400 px-2 py-1 rounded-md bg-slate-700 ${type==="checkbox"? "mr-2":""}`} onChange={onChange} />
   
  )
}

export default Input
