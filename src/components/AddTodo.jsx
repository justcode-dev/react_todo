import AddIcon from '@mui/icons-material/Add';

function AddTodo() {

	return (
		<div className="todo-item-container">
			<div className="add-todo">
				<input type='text' className='todo-item-add-textinput' placeholder='Add a todo' onKeyDown={(e) => {
          if (e.key === 'Enter') {
            console.log('add new todo');
          }
        }}/>
			</div>
			<div className="todo-item-container-action">
				<AddIcon
					marginRight="10px"
					cursor="pointer"
					onClick={() => {
						console.log('add button pressed');
					}}
					size={16}
				/>
			</div>
		</div>
	);
}

export default AddTodo;
