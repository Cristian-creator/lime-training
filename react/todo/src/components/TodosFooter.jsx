const filters = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "active",
    label: "Active",
  },
  {
    value: "completed",
    label: "Completed",
  },
];

const TodosFooter = ({
  todos,
  setTodos,
  selectedFilter,
  setSelectedFilter,
}) => {
  const numberOfUncompletedTodos = todos.filter(
    (todo) => todo.isCompleted === false
  ).length;

  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  const handleRemoveCompleted = () => {
    const newTodos = todos.filter((todo) => todo.isCompleted === false);

    setTodos(newTodos);
  };

  return (
    <div>
      <p>{numberOfUncompletedTodos} items left</p>
      <div>
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={selectedFilter === filter.value ? "selected-filter" : ""}
            onClick={() => handleFilterChange(filter.value)}>
            {filter.label}
          </button>
        ))}
      </div>
      <button onClick={handleRemoveCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodosFooter;
