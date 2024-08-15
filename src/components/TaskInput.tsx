import React from 'react'
import Button from './Button';
interface InputProps{

inputValue: string;
 handleInputValue: (inputValue: string) => void;
  priority: string;
  handlePriorityInput: (priority: string) => void; 
   isEditMode: boolean;
    error: string;
     handleUpdate: () => false | undefined;
      handleAdd: () => false | undefined; 
    
}

const TaskInput:React.FC<InputProps> = ({inputValue,handleInputValue,priority,handlePriorityInput,isEditMode,handleUpdate,handleAdd,error}) => {
  return (
    <div className="space-y-2">
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={inputValue}
        placeholder="Enter your task"
        className="flex-1 text-slate-400 px-2 py-1 rounded-md bg-slate-700"
        onChange={(event) => handleInputValue(event.target.value)}
      />
      <select
        value={priority}
        className="  px-2 py-1  rounded-md text-slate-400 bg-slate-700"
        onChange={(event) => handlePriorityInput( event.target.value)}
      >
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
      {/* <button className="bg-blue-700 text-white rounded-md px-3 py-1 text-lg" onClick={isEditMode ? handleUpdate : handleAdd}>
        {isEditMode ? "Update" : "Add"}
      </button> */}
      <Button onClick={isEditMode ? handleUpdate : handleAdd}  text={isEditMode ? "Update" : "Add"}  />
    </div>
    {error && <p className="text-sm font-medium text-red-800 p-1">{error}</p>}
  </div>
  )
}

export default TaskInput
