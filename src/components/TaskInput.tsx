import React from 'react'
import Button from './Button';
import Input from './Input';
import Select from './Select';
import ErrorLabel from './ErrorLabel';
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
      <Input
        type="text"
        value={inputValue}
        placeholder="Enter your task"
        onChange={(event) => handleInputValue(event.target.value)}
      />
      <Select
        value={priority}
        onChange={(event) => handlePriorityInput( event.target.value)}
      >
        <option value="High">High</option>
        <option value="Low">Low</option>
      </Select>
      {/* <button className="bg-blue-700 text-white rounded-md px-3 py-1 text-lg" onClick={isEditMode ? handleUpdate : handleAdd}>
        {isEditMode ? "Update" : "Add"}
      </button> */}
      <Button onClick={isEditMode ? handleUpdate : handleAdd}  text={isEditMode ? "Update" : "Add"} buttonType={isEditMode?  'update':'add'}  />
    </div>
    {error && <ErrorLabel  error={error}/>}
  </div>
  )
}

export default TaskInput
