import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todos() {
	return (
		<div className="todos-container">
			<AddTodo/>
			<TodoItem/>
      <TodoItem/>
		</div>
	);
}

export default Todos;