import React from "react";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

 interface filtereListProps{
    text: string; id: number; completed: boolean; priority: string;
    editId:number,
    handleCompleteToggle: (id: number) => void;
    handleEditPriority: (id:number, priority: string) => void;
    handleDelete: (id: number) => void;
     handleEdit: (editId: number, text: string, priority: string) => void;
 }

const FilterList:React.FC<filtereListProps> = ({id,text,completed,priority,handleCompleteToggle,handleEditPriority,handleDelete,handleEdit,editId}) => {
  return (
    <div key={id} className="bg-slate-800 flex items-center gap-2 px-4  justify-between rounded-md py-2 text-lg">
    <div className="flex">
      <Input
        type="checkbox"
        checked={completed}
        onChange={() => handleCompleteToggle(id)}
      />
      <span className={` text-slate-400${completed ? "line-through  ":""}`}>{text}</span>
    </div>
    <div className="flex items-center gap-1">
      <Select
        value={priority}
        onChange={(event) => handleEditPriority(id,event.target.value)}
        disabled={id === editId}
      >
        <option value="High">High</option>
        <option value="Low">Low</option>
      </Select>
      <Button
        disabled={id === editId}
        onClick={() => handleDelete(id)}
        buttonType='delete'
        text='Delete'
      />
      <Button
        onClick={() => handleEdit(id, text,priority)}
        buttonType='edit'
        text='Edit'
      />
    </div>
  </div>
  )
}

export default FilterList
