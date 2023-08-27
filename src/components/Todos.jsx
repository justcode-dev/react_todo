import { useState } from 'react';
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
	const [todos, setTodos] = useState([]);

	const TodosList =
		todos.length > 0 ? (
			todos.map((todo) => <TodoItem key={todo.id} item={todo} />)
		) : (
			<NoTodosMessage />
		);

	return (
		<div className="todos-container">
			<AddTodo
				onAddTodo={function (newTodo) {
					console.log('Add new todo');
					if (newTodo) {
						console.log(newTodo);
						setTodos([...todos, newTodo]);
					}
				}}
			/>
			{TodosList}
		</div>
	);
}

export default Todos;
