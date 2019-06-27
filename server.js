const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/products', (req, res) => {
	console.log('reached products');
	res.send('reached products')
})

app.post('/add-product', (req, res) => {
	mongoose.Promise = global.Promise;
	mongoose.connect("mongodb://localhost:27017/test");

	var productSchema = new mongoose.Schema({
		name: String
	});

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
