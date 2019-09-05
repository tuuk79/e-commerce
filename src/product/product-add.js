import React from 'react'

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
		fetch("/add-product", {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.state.value
			})
		})
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
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:<input type="text" value={this.state.value} onChange={this.handleChange}
						/>
					</label>
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}
}

export default ProductAdd;
