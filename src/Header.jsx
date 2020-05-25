import React from 'react';

const Header = (props) => {
	
	return(
	
		<div>
			<h1 style={headerStyle}>Todo List</h1>
		</div>
	
	);
	
};

const headerStyle = {
	background: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
};

export default Header;