import React from 'react'
interface errorProps{
   
    error: string;
}
const ErrorLabel:React.FC<errorProps> = ({error}) => {
  return (
    <div>
      <p className="text-sm font-medium text-red-800 p-1">{error}</p>
    </div>
  )
}

export default ErrorLabel
