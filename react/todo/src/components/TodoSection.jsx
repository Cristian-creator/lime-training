const TodoSection = ({ todo: { id, text, isCompleted }, todos, setTodos }) => {
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
    <div key={id} className="todo-container">
      <input
        onChange={() => handleCheck(id)}
        type="checkbox"
        defaultChecked={isCompleted}
      />
      <span className={isCompleted === true ? "todo-is-completed" : ""}>
        {text}
      </span>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};

export default TodoSection;
