import { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  let [currentId, setCurrentId] = useState(1);
  const numberOfUncompletedTodos = todos.filter(
    (todo) => todo.isCompleted === false
  ).length;

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

  console.log(todos);

  const handleCheck = (todoId) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;

    setTodos(newTodos);
  };

  const handleDelete = (todoId) => {
    const newTodos = [...todos];

    const todoIndex = newTodos.findIndex((todo) => todo.id === todoId);
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create a new todo..."
          name="todo-text"
        />
        <button>Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-container">
          <input onChange={() => handleCheck(todo.id)} type="checkbox" />
          <span
            className={todo.isCompleted === true ? "todo-is-completed" : ""}>
            {todo.text}
          </span>
          <button onClick={() => handleDelete(todo.id)}>delete</button>
        </div>
      ))}
      <div>
        <p>{numberOfUncompletedTodos} items left</p>
      </div>
    </>
  );
};

export default App;
