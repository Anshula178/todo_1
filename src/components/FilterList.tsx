import React from "react";

 interface filtereListProps{
    text: string; id: number; completed: boolean; priority: string;
    editId:number,
    handleCompleteToggle: (id: number) => void;
     handleEditPriority: ( priority: string) => void;
    handleDelete: (id: number) => void;
     handleEdit: (editId: number, text: string, priority: string) => void;
 }

const FilterList:React.FC<filtereListProps> = ({id,text,completed,priority,handleCompleteToggle,handleEditPriority,handleDelete,handleEdit,editId}) => {
  return (
    <div key={id} className="bg-gray-50 flex items-center gap-2 px-8 py-4 justify-between rounded-md p-2 text-lg">
    <div className="flex">
      <input
        type="checkbox"
        checked={completed}
        className="mr-2"
        onChange={() => handleCompleteToggle(id)}
      />
      <span className={completed ?"line-through":""}>{text}</span>
    </div>
    <div className="flex items-center gap-1">
     
      <select
        value={priority}
        className="border border-blue-700 px-2 py-1 rounded-md"
        onChange={()=>handleEditPriority(priority)}
      >
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
      <button
        className="bg-red-700 text-white p-2 rounded-md disabled:opacity-10"
        disabled={id === editId}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
      <button
        className="bg-purple-800 text-white p-2 rounded-md disabled:opacity-10"
        onClick={() => handleEdit(id, text,priority)}
      >
        Edit
      </button>
    </div>
  </div>
  )
}

export default FilterList
