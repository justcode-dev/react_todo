import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todos() {
	// create mock data
	const todos = [
		{ id: 1, todo: 'Feed the dog'},
		{ id: 2, todo: 'Wash dishes'},
		{ id: 3, todo: 'Cook breakfast'}
	]

	return (
		<div className="todos-container">
			<AddTodo/>
			<TodoItem item={todos[0]}/>
      <TodoItem item={todos[1]}/>
		</div>
	);
}

export default Todos;