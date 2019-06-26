import React from 'react'
import { ajax } from 'rxjs/ajax'

class ProductAdd extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event) {
		fetch("http://localhost:3000/products")
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result)
				},
				(error) => {
					console.log(error)
				}
			)

		event.preventDefault();
	}

	render() {
		return (
			<div>
				<h1>Add Product</h1>
				<form>
					<label>
						Name:<input type="text" value={this.state.value} />
					</label>
					<button value="Submit" onClick={this.handleSubmit} />
				</form>
			</div>
		);
	}
}

export default ProductAdd;