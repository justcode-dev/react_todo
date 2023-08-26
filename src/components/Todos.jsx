import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function Todos() {
	// create mock data
	const todos = [
		{ id: 1, todo: 'Feed the dog' },
		{ id: 2, todo: 'Wash dishes' },
		{ id: 3, todo: 'Cook breakfast' },
	];

	return (
		<div className="todos-container">
			<AddTodo />
			{todos.map((todo) => (
				<TodoItem key={todo.id} item={todo} />
			))}
		</div>
	);
}

export default Todos;
