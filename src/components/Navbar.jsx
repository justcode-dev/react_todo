import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
	return (
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
	);
}

export default Navbar;
