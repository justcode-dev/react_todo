import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Todos() {
	return (
		<div className="todos-container">
			<div className="todo-item-container">
				<div className="todo-item-container-content">
					<input type="checkbox" />
					<div className="todo-item-container-content-text">
						<p>Do something</p>
					</div>
				</div>
				<div className="todo-item-container-action">
					<EditIcon
						sx={{ color: 'warning.light', marginRight: '10px' }}
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
		</div>
	);
}

export default Todos;