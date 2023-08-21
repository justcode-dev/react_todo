import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
	return (
		<>
			<main>
				<div className="navbar">
					<div className="navbar-menu-bar">
						<MenuIcon
							color="whitesmoke"
							onClick={() => {
								console.log('sidebar pressed');
							}}
							size={16}
						/>
						<ul className="navbar-list">
							<li>TaskLister</li>
						</ul>
					</div>
				</div>
				<div className="todos-container">
					<div className="todo-item-container">
						<div className="todo-item-container-content">
							<input type="checkbox" />
							<div className='todo-item-container-content-text'>
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
			</main>
		</>
	);
}

export default App;
