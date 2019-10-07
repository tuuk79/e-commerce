const express = require("express");
const app = express();
const port = 4000;
const mongoose = require("mongoose");
var cors = require("cors");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

var productSchema = new mongoose.Schema({
  name: String
});

var Product = mongoose.model("Product", productSchema);

app.get("/get-products", (req, res) => {
  Product.find({}, function(err, items) {
    if (err) {
      return res.send("nothing found");
    }
    res.send(items);
  });
});

app.post("/add-product", (req, res) => {
  var product = new Product(req.body);
  product
    .save()
    .then(item => {
      res.send("item saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.put("/update-product/:id", (req, res) => {
  var query = { _id: req.params.id };

  Product.update(query, { name: req.body.name })
    .then(item => {
      res.send("item updated in database");
    })
    .catch(err => {
      res.status(400).send("unable to update item in database");
    });
});

app.delete("/delete-product/:id", (req, res) => {
  var query = { _id: req.params.id };

  Product.deleteOne(query)
    .then(item => {
      res.send("item deleted from database");
    })
    .catch(err => {
      res.status(400).send("unable to delete item in database");
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
