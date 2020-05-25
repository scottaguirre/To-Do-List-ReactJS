import React from 'react';

import {Link} from 'react-router-dom';

const Nav = () => {
	
	return(
	    <ul className='nav'>
			<li>
				<Link style={{color: 'white'}} to="/">Home |</Link>
			</li>
			<li>
				<Link style={{color: 'white', marginLeft: '5px'}} to="/about">About</Link>
			</li>
		</ul>
	);
};

export default Nav;

