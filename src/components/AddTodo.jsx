import AddIcon from '@mui/icons-material/Add';

function AddTodo(props) {
	return (
		<div className="todo-item-container">
			<div className="add-todo-container">
				<input
					type="text"
					className="todo-item-add-textinput"
					placeholder="Add a todo"
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							props.onAddTodo({ id: 1, todo: 'do something '});
						}
					}}
				/>
			</div>
			<div className="todo-item-container-action">
				<AddIcon
					marginRight="10px"
					cursor="pointer"
					onClick={() => {
						props.onAddTodo({ id: 1, todo: 'do something '});
					}}
					size={16}
				/>
			</div>
		</div>
	);
}

export default AddTodo;
