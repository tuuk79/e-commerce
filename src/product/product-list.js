import React from "react";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    fetch("http://localhost:4000/get-products")
      .then(response => response.json())
      .then(data => this.setState({ products: data }, this.showState))
      .catch(error => this.setState({ error }));
  }

  showState() {
    console.log("showing state");
    console.log(this.state);
  }

  render() {
    return (
      <ul>
        {this.state.products.map(product => (
          <li>{product.name}</li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
