import './App.css';
import MenuIcon from '@mui/icons-material/Menu';

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
						<p>item 1</p>
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
