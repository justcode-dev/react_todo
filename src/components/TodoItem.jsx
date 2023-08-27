import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem(props) {
	const item = props.item;
	const id = item.id;
	const todo = item.todo;
	// const { item, id } = props.item;
	return (
		<div className="todo-item-container">
			<div className="todo-item-container-content">
				<input type="checkbox" />
				<div className="todo-item-container-content-text">
					<p>{todo}</p>
				</div>
			</div>
			<div className="todo-item-container-action">
				<EditIcon
					sx={{ color: 'warning.light' }}
					cursor="pointer"
					onClick={() => {
						console.log('edit button pressed');
					}}
					size={16}
				/>
				<DeleteIcon
					color="error"
					cursor="pointer"
					onClick={() => {
						console.log('delete button pressed');
					}}
					size={16}
				/>
			</div>
		</div>
	);
}

export default TodoItem;
