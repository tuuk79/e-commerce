import React from 'react'

class ProductList extends React.Component {
	render() {
		return (
			<div>
				<h1>Shopping List for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
				</ul>
			</div>
		);
	}
}

export default ProductList;