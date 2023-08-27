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

	const handleDeleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleUpdateTodo = (updatedTodo) => {
		const { id } = updatedTodo;
		const existingTodoIndex = todos.findIndex((todo) => todo.id === id);
		const removedOldTodo = todos.filter(todo => todo.id !== id)
		// insert new todo in the index of the removed old todo
		setTodos([
			...removedOldTodo.slice(0, existingTodoIndex),
			updatedTodo,
			...removedOldTodo.slice(existingTodoIndex, todos.length),
		]);
	};

	const TodosList =
		todos.length > 0 ? (
			todos.map((todo) => (
				<TodoItem
					key={todo.id}
					item={todo}
					onDeleteTodo={handleDeleteTodo}
					onUpdateTodo={handleUpdateTodo}
				/>
			))
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
