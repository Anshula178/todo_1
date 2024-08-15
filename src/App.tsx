
import TaskFilter from "./components/TaskFilter";
import FilterList from "./components/FilterList";
import TaskInput from "./components/TaskInput";
import useTodoList from "./hooks/Todolist";


const TodoList = () => {
const { editId,
  error,
  inputValue,
  priority,
  todoList,
  filter,
  isEditMode,
  handleInputValue,
  handlePriorityInput,
  handleEditPriority,
  handleAdd,
  handleDelete,
  handleEdit,
  handleUpdate,
  handleAllPendingCompleted,
  handleCompleteToggle,
  filteredList,}=useTodoList()
  return (
    <div className=" bg-slate-950 min-h-screen ">

      <div className="min-h-76 flex items-center justify-center ">
     
        <div className="max-w-[620px] items-center w-full p-2 rounded-md  shadow-sm space-y-4 mt-36">
        <h3 className="  font-extrabold text-4xl bg-gradient-to-b from-purple-600 to-blue-900 bg-clip-text text-transparent">T O D O </h3>
        
          <div className="space-y-2 px-4 py-4  min-h-20 bg-slate-900">
            <div>
            <TaskInput inputValue={inputValue}  handleInputValue={handleInputValue} priority={priority} handlePriorityInput={handlePriorityInput} isEditMode={isEditMode}  error={error} handleUpdate={handleUpdate} handleAdd={handleAdd}/>
            </div>
            {filteredList.length === 0 ? (
              <p className="text-center text-slate-400">Nothing for today</p>
            ) : (
              filteredList.map(({ text, id, completed, priority }) => (
                <FilterList text={text} id={id} completed={completed} priority={priority} handleCompleteToggle={handleCompleteToggle} handleEditPriority={handleEditPriority}  handleDelete={handleDelete} handleEdit={handleEdit} editId={editId} />
                
              ))
            )}
             <TaskFilter handleAllPendingCompleted={handleAllPendingCompleted} filter={filter}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
