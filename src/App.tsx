import { useMemo, useState } from "react";
import TaskFilter from "./components/TaskFilter";
import FilterList from "./components/FilterList";
import TaskInput from "./components/TaskInput";

interface TodoStateType {
  editId: number;
  inputValue: string;
  error: string;
  todoList: { text: string; id: number; completed: boolean; priority: string }[];
  filter: string;
  priority: string;
}

const TodoList = () => {
  const [{ editId, error, inputValue, todoList, filter, priority }, setState] = useState<TodoStateType>({
    editId: -1,
    inputValue: "",
    error: "",
    todoList: [],
    filter: "all",
    priority: "High", 
  });

  const isEditMode = editId >= 0;

  const validateInputValue = () => {
    if (inputValue && inputValue.trim()) {
      setState((prev) => ({
        ...prev,
        error: "",
      }));
      return true;
    } else {
      setState((prev) => ({
        ...prev,
        error: "Required",
      }));
      return false;
    }
  };

  const handleInputValue = (inputValue: string) => {
    setState((prev) => ({ ...prev, inputValue }));
  };

  const handlePriorityInput = (priority: string) => {
    setState((prev) => ({ ...prev, priority }));
  };

  const handleAdd = () => {
    if (!validateInputValue()) return false;

    setState((prev) => ({
      ...prev,
      todoList: [
        ...prev.todoList,
        { text: prev.inputValue, id: prev.todoList.length, completed: false, priority: prev.priority },
      ],
      inputValue: "",
      error: "",
      priority: "High", 
    }));
  };

  const handleDelete = (id: number) => {
    setState((prev) => ({ ...prev, todoList: prev.todoList.filter((todo) => todo.id !== id) }));
  };

  const handleEdit = (editId: number, text: string,priority:string) => {
    setState((prev) => ({ ...prev, editId, inputValue: text,priority, error: "" }));
  };
  const handleEditPriority=(priority:string)=>{
    setState((prev)=>({...prev,priority}))
  }

  const handleUpdate = () => {
    if (!validateInputValue()) return false;
    setState((prev) => ({
      ...prev,
    
      todoList: prev.todoList.map((todo) =>
        todo.id === prev.editId ? { ...todo, text: prev.inputValue,priority } : todo
      ),
      editId: -1,
      inputValue: "",
      priority:"High"

    }));
  };

  const handleAllPendingCompleted = (filter: string) => {
    setState((prev) => ({
      ...prev,
      filter,
    }));
  };

  const handleCompleteToggle = (id: number) => {
    setState((prev) => ({
      ...prev,
      todoList: prev.todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  
  // const sortedTodoList = [...todoList].sort((a, b) =>
  //   a.priority === b.priority ? 0 : a.priority === "High" ? -1 : 1
  // );

  // const filteredList = sortedTodoList.filter((todo) => {
  //   if (filter === "all") return todo;
  //   if (filter === "pending") return !todo.completed;
  //   if (filter === "completed") return todo.completed;
  //   return true;
  //});
const filteredList=useMemo(()=>{
  let newTodoList=todoList
  let filtereList=newTodoList.filter((todo)=>{
     return filter==="all"?  todo:
      filter==="pending"? !todo.completed:todo.completed
  })
  console.log(filtereList)
  return filtereList.sort((a, b) =>
    a.priority === b.priority ? 0 : a.priority === "High" ? -1 : 1
  );
 
  },[filter,todoList])
  
  return (
    <div className="min-h-screen mt-32">

      <div className="min-h-76 flex items-center justify-center">
        <div className="max-w-[620px] items-center w-full p-2 rounded-md bg-slate-200 shadow-sm space-y-4">
          <h3>Todo List</h3>
         <TaskInput inputValue={inputValue}  handleInputValue={handleInputValue} priority={priority} handleEditPriority={handleEditPriority} isEditMode={isEditMode}  error={error} handleUpdate={handleUpdate} handleAdd={handleAdd}/>
          <div className="space-y-2 min-h-20">

         <TaskFilter handleAllPendingCompleted={handleAllPendingCompleted} filter={filter}/>
            {filteredList.length === 0 ? (
              <p className="text-center">Nothing for today</p>
            ) : (
              filteredList.map(({ text, id, completed, priority }) => (
                <FilterList text={text} id={id} completed={completed} priority={priority} handleCompleteToggle={handleCompleteToggle} handleEditPriority={handleEditPriority}  handleDelete={handleDelete} handleEdit={handleEdit} editId={editId} />
                
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
