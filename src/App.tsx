import { useState } from "react";

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
    priority: "High", // Default priority
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
      priority: "High", // Reset priority after adding
    }));
  };

  const handleDelete = (id: number) => {
    setState((prev) => ({ ...prev, todoList: prev.todoList.filter((todo) => todo.id !== id) }));
  };

  const handleEdit = (editId: number, text: string) => {
    setState((prev) => ({ ...prev, editId, inputValue: text, error: "" }));
  };

  const handleUpdate = () => {
    if (!validateInputValue()) return false;
    setState((prev) => ({
      ...prev,
      todoList: prev.todoList.map((todo) =>
        todo.id === prev.editId ? { ...todo, text: prev.inputValue } : todo
      ),
      editId: -1,
      inputValue: "",
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

  // Sort the todo list based on priority: High first, Low second
  const sortedTodoList = [...todoList].sort((a, b) =>
    a.priority === b.priority ? 0 : a.priority === "High" ? -1 : 1
  );

  const filteredList = sortedTodoList.filter((todo) => {
    if (filter === "all") return todo;
    if (filter === "pending") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen">
      <div className="flex justify-center m-3 px-3 py-3">
        <button className="bg-black text-white px-2 py-2 ml-2" onClick={() => handleAllPendingCompleted("all")}>
          All
        </button>
        <button className="bg-black text-white px-2 py-2 ml-2" onClick={() => handleAllPendingCompleted("pending")}>
          Pending
        </button>
        <button className="bg-black text-white px-2 py-2 ml-2" onClick={() => handleAllPendingCompleted("completed")}>
          Completed
        </button>
      </div>

      <div className="min-h-56 flex items-center justify-center">
        <div className="max-w-[520px] items-center w-full p-2 rounded-md bg-slate-200 shadow-sm space-y-4">
          <h3>Todo List</h3>
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
              <button className="bg-blue-700 rounded-md px-3 py-1 text-lg" onClick={isEditMode ? handleUpdate : handleAdd}>
                {isEditMode ? "Update" : "Add"}
              </button>
            </div>
            {error && <p className="text-sm font-medium text-red-800 p-1">{error}</p>}
          </div>
          <div className="space-y-2 min-h-20">
            {todoList.length === 0 ? (
              <p>Nothing for today</p>
            ) : (
              filteredList.map(({ text, id, completed, priority }) => (
                <div key={id} className="bg-gray-50 flex items-center gap-2 justify-between rounded-md p-2 text-lg">
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
                    <span className="text-sm text-gray-500">({priority})</span>
                    <button
                      className="bg-red-700 p-2 rounded-md disabled:opacity-10"
                      disabled={id === editId}
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-purple-800 p-2 rounded-md disabled:opacity-10"
                      onClick={() => handleEdit(id, text)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
