import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const generateID = () => {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const generateCharacter = () =>
		characters[Math.floor(Math.random() * characters.length) - 1];
	const generateRandomNumber = () => Math.floor(Math.random() * 1000);
	return generateCharacter() + generateRandomNumber();
};

function AddTodo(props) {
	const [todo, setTodo] = useState('');

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const handleAddTodo = () => {
		if (todo.length > 0) {
			props.onAddTodo({ id: generateID(), todo });
			setTodo('');
		}
	};

	return (
		<div className="todo-item-container">
			<div className="add-todo-container">
				<input
					value={todo}
					onChange={handleChange}
					type="text"
					className="todo-item-add-textinput"
					placeholder="Add a todo"
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleAddTodo();
						}
					}}
				/>
			</div>
			<div className="todo-item-container-action">
				<AddIcon
					cursor="pointer"
					onClick={() => {
						handleAddTodo();
					}}
					size={16}
				/>
			</div>
		</div>
	);
}

export default AddTodo;
