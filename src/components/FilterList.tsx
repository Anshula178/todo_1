import React from "react";

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
    <div key={id} className="bg-slate-700 flex items-center gap-2 px-8  justify-between rounded-md p-2 text-lg">
    <div className="flex">
      <input
        type="checkbox"
        checked={completed}
        className="mr-2"
        onChange={() => handleCompleteToggle(id)}
      />
      <span className={` text-slate-400${completed ?"line-through":""}`}>{text}</span>
    </div>
    <div className="flex items-center gap-1">
     
      <select
        value={priority}
        className=" bg-slate-700 text-slate-400 px-2 py-1 rounded-md"
        onChange={(event) => handleEditPriority(id,event.target.value)}
      >
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
      <button
        className="bg-red-700 text-white p-1  rounded-md disabled:opacity-10"
        disabled={id === editId}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
      <button
        className="bg-purple-800 text-white p-1 m-1 rounded-md disabled:opacity-10"
        onClick={() => handleEdit(id, text,priority)}
      >
        Edit
      </button>
    </div>
  </div>
  )
}

export default FilterList
