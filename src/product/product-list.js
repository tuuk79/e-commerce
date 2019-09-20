import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    fetch("http://localhost:4000/get-products")
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(error => this.setState({ error }));
  }

  render() {
    return (
      <div>
        {this.state.products.map((product, i) => (
          <Card key={i}>
            <CardContent>
              <Typography>name:</Typography>
              <Typography>{product.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}

export default ProductList;
