import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';

function TodoItem(props) {
	const item = props.item;
	const id = item.id;
	const todo = item.todo;
	// const { item, id } = props.item;

	const [inEditMode, setInEditMode] = useState(false);
	const [newTodo, setNewTodo] = useState(todo);

	const handleChange = (e) => {
		setNewTodo(e.target.value);
	};

	const handleUpdateTodo = () => {
		props.onUpdateTodo({
			id,
			todo: newTodo,
		});
		setInEditMode(false);
	};

	const handleCancelUpdate = () => {
		setInEditMode(false);
	};

	return (
		<div className="todo-item-container">
			{inEditMode ? (
				<div className="add-todo-container">
					<input
						value={newTodo}
						onChange={handleChange}
						type="text"
						className="todo-item-add-textinput"
						placeholder="Add a todo"
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								handleUpdateTodo();
							} else if (e.key === 'Escape') {
								setInEditMode(false);
							}
						}}
					/>
				</div>
			) : (
				<div className="todo-item-container-content">
					<input type="checkbox" />
					<div
						className="todo-item-container-content-text"
						onClick={() => {
							setInEditMode(true);
						}}
					>
						<p>{todo}</p>
					</div>
				</div>
			)}
			{inEditMode ? (
				<div className="todo-item-container-action">
					<CheckIcon
						color="success"
						cursor="pointer"
						onClick={handleUpdateTodo}
						size={16}
					/>
					<ClearIcon
						color="error"
						cursor="pointer"
						onClick={handleCancelUpdate}
						size={16}
					/>
				</div>
			) : (
				<div className="todo-item-container-action">
					<EditIcon
						sx={{ color: 'warning.light' }}
						cursor="pointer"
						onClick={() => {
							console.log('edit mode');
							setInEditMode(true);
						}}
						size={16}
					/>
					<DeleteIcon
						color="error"
						cursor="pointer"
						onClick={() => {
							props.onDeleteTodo(id);
						}}
						size={16}
					/>
				</div>
			)}
		</div>
	);
}

export default TodoItem;
