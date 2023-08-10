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
					</div>
					<ul className="navbar-list">
						<li>TaskLister</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default App;
