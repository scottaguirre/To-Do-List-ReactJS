import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import About from './About';
import Nav from './Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div className="Container">
			<Nav />
		</div>

		<Route exact path="/">
			<App />
		</Route>
		<Route path="/about">
			<About />
		</Route>
	</Router>, 
	document.getElementById('root'));
