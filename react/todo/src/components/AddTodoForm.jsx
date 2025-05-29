import { useState } from "react";

const AddTodoForm = ({ todos, setTodos }) => {
  let [currentId, setCurrentId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const newTodos = [...todos];
    newTodos.push({
      id: currentId,
      text: data.get("todo-text"),
      isCompleted: false,
    });

    setTodos(newTodos);
    setCurrentId(currentId + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Create a new todo..." name="todo-text" />
      <button>Add</button>
    </form>
  );
};

export default AddTodoForm;
