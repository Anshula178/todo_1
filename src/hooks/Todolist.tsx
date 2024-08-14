import { useState, useMemo } from "react";

interface TodoType {
  text: string;
  id: number;
  completed: boolean;
  priority: string;
}

interface TodoStateType {
  editId: number;
  inputValue: string;
  error: string;
  todoList: TodoType[];
  filter: string;
  priority: string;
}

const useTodoList = () => {
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
      setState((prev) => ({ ...prev, error: "" }));
      return true;
    } else {
      setState((prev) => ({ ...prev, error: "Required" }));
      return false;
    }
  };

  const handleInputValue = (inputValue: string) => setState((prev) => ({ ...prev, inputValue }));
  const handlePriorityInput = (priority: string) => setState((prev) => ({ ...prev, priority }));

  const handleAdd = () => {
    if (!validateInputValue()) return false;
    setState((prev) => ({
      ...prev,
      todoList: [...prev.todoList, { text: prev.inputValue, id: prev.todoList.length, completed: false, priority: prev.priority }],
      inputValue: "",
      error: "",
      priority: "High",
    }));
  };

  const handleDelete = (id: number) => setState((prev) => ({ ...prev, todoList: prev.todoList.filter((todo) => todo.id !== id) }));

  const handleEdit = (editId: number, text: string, priority: string) => {
    setState((prev) => ({ ...prev, editId, inputValue: text, priority, error: "" }));
  };

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
  return {
    editId,
    error,
    inputValue,
    priority,
    todoList,
    filter,
    isEditMode,
    handleInputValue,
    handlePriorityInput,
    handleAdd,
    handleDelete,
    handleEdit,
    handleUpdate,
    handleAllPendingCompleted,
    handleCompleteToggle,
    filteredList,
  };
};

export default useTodoList;
