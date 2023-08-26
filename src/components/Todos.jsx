import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function NoTodosMessage() {
	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'flex-start',
			}}
		>
			<p>You have no Todos</p>
		</div>
	);
}

function Todos() {
	// create mock dataF
	// const todos = [
	// 	{ id: 1, todo: 'Feed the dog' },
	// 	{ id: 2, todo: 'Wash dishes' },
	// 	{ id: 3, todo: 'Cook breakfast' },
	// ];
	const todos = [];

	const TodosList =
		todos.length > 0 ? (
			todos.map((todo) => <TodoItem key={todo.id} item={todo} />)
		) : (
			<NoTodosMessage />
		);

	return (
		<div className="todos-container">
			<AddTodo />
			{TodosList}
		</div>
	);
}

export default Todos;
