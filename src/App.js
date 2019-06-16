import React from 'react';
import './App.css';
import ProductList from './product/product-list';
import ProductAdd from './product/product-add';
import UserList from './user/user-list';
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
							<Link to="/product-add">Add Product</Link>
						</li>
						<li>
							<Link to="/user-list">Users</Link>
						</li>
					</ul>
				</nav>

				<Route path="/product-list" exact component={ProductList} />
				<Route path="/product-add" exact component={ProductAdd} />
				<Route path="/user-list" exact component={UserList} />
			</div>
		</Router>
	);
}

export default App;
