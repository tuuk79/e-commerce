const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'build')));

 app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get('/products', (req, res) => {
	console.log('reached products');
	res.send('reached products')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
