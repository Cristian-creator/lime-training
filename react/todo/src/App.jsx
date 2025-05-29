import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddTodoForm from "./components/AddTodoForm";
import TodoSection from "./components/TodoSection";
import TodosFooter from "./components/TodosFooter";

const App = () => {
  const [todos, setTodos] = useState([]);
  let [selectedFilter, setSelectedFilter] = useState("all");

  console.log(todos);

  const displayedTodos = todos.filter((todo) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "active" && todo.isCompleted === false) return true;
    if (selectedFilter === "completed" && todo.isCompleted === true)
      return true;
  });

  return (
    <>
      <Navbar />
      <AddTodoForm todos={todos} setTodos={setTodos} />
      {displayedTodos.map((todo) => (
        <TodoSection todo={todo} todos={todos} setTodos={setTodos} />
      ))}
      <TodosFooter
        todos={todos}
        setTodos={setTodos}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
    </>
  );
};

export default App;
