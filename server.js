const express = require('express')
const app = express()
const port = 3000
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

app.get('/products', (req, res) => {
	res.send({ "name": "namester" })
})

app.post('/add-product', (req, res) => {

	var Product = mongoose.model("Product", productSchema);

	var product = new Product(req.body);
	product.save()
		.then(item => {
			console.log(product)
			res.send("item saved to database");
		})
		.catch(err => {
			res.status(400).send("unable to save to database");
		});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
