import React from 'react';
import './App.css';
import ProductList from './product-list/product-list';
import UserList from './user-list/user-list';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/product-list">Products</Link>
						</li>
						<li>
							<Link to="/user-list/">Users</Link>
						</li>
					</ul>
				</nav>

				<Route path="/product-list" exact component={ProductList} />
				<Route path="/user-list" exact component={UserList} />
			</div>
		</Router>
	);
}

export default App;
