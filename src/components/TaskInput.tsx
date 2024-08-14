import React from 'react'
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
        className="flex-1 px-2 py-1 rounded-md"
        onChange={(event) => handleInputValue(event.target.value)}
      />
      <select
        value={priority}
        className="border border-blue-700 px-2 py-1 rounded-md"
        onChange={(event) => handlePriorityInput(event.target.value)}
      >
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
      <button className="bg-blue-700 text-white rounded-md px-3 py-1 text-lg" onClick={isEditMode ? handleUpdate : handleAdd}>
        {isEditMode ? "Update" : "Add"}
      </button>
    </div>
    {error && <p className="text-sm font-medium text-red-800 p-1">{error}</p>}
  </div>
  )
}

export default TaskInput
