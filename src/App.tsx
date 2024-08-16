import TaskFilter from "./components/TaskFilter";
import FilterList from "./components/FilterList";
import TaskInput from "./components/TaskInput";
import useTodoList from "./hooks/Todolist";

const TodoList = () => {
  const {
    editId,
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
    filteredList,
  } = useTodoList();

  return (
    <div className=" relative bg-slate-950 min-h-screen flex items-center justify-center">
     
    
    
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[url('./assets/bg-desktop-light.jpg')] bg-cover bg-center z-0"></div>

     
      <div className=" absolute top-0 left-auto z-10 w-full max-w-[620px] p-4 space-y-4 mt-36">
        <h3 className="font-extrabold text-4xl text-white bg-clip-text text-transparent text-center">
          T O D O
        </h3>
        
        <div className="bg-slate-900 bg-opacity-100 rounded-md shadow-lg p-6 mb-20 space-y-4">
               <TaskInput
            inputValue={inputValue}
            handleInputValue={handleInputValue}
            priority={priority}
            handlePriorityInput={handlePriorityInput}
            isEditMode={isEditMode}
            error={error}
            handleUpdate={handleUpdate}
            handleAdd={handleAdd}
          />
        </div>
        <div className="bg-slate-900 bg-opacity-100 rounded-md shadow-lg p-6  space-y-4">
        
          {filteredList.length === 0 ? (
            <p className="text-center text-slate-400">Nothing for today</p>
          ) : (
            filteredList.map((todo) => (
              <FilterList
                key={todo.id}
                text={todo.text}
                id={todo.id}
                completed={todo.completed}
                priority={todo.priority}
                handleCompleteToggle={handleCompleteToggle}
                handleEditPriority={handleEditPriority}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                editId={editId}
              />
            ))
          )}
          <TaskFilter handleAllPendingCompleted={handleAllPendingCompleted} filter={filter} />
        </div>
      </div>
      </div>
   
  );
};

export default TodoList;
