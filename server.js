const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

var productSchema = new mongoose.Schema({
	name: String
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/get-products', (req, res) => {
	var Product = mongoose.model("Product", productSchema);

	var products = Product.find({}, function(err, items) {
		if (err) {
			return res.send();
		}
	}).exec(function(err, items) {
		if (err) {
			return res.send()
		}
		res.send(items)
	})	
})

app.post('/add-product', (req, res) => {

	var Product = mongoose.model("Product", productSchema);

	var product = new Product(req.body);
	product.save()
		.then(item => {
			res.send("item saved to database");
		})
		.catch(err => {
			res.status(400).send("unable to save to database");
		});
})

app.put('/update-product/:id', (req, res) => {
	var Product = mongoose.model("Product", productSchema);

	var query = { _id: req.params.id }

	Product.update(query, { name: req.body.name })
		.then(item => {
			res.send('item updated in database');
		})
		.catch(err => {
			res.status(400).send("unable to update item in database");
		})
})

app.delete('/delete-product/:id', (req, res) => {
	var Product = mongoose.model("Product", productSchema);

	var query = {_id: req.params.id }

	Product.deleteOne(query)
		.then(item => {
			res.send('item deleted from database');
		})
		.catch(err => {
			res.status(400).send("unable to delete item in database");
		})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
