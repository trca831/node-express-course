const { products } = require("./data")
const express = require("express")
const app = express()

app.use(express.static("./public"))

app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: "It worked!" })
})

app.get('/api/v1/products', (req, res) => {
    res.status(200).json(products)
})

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);
    if(!product) {
        res.status(404).json({ message: "That product was not found."})
    }
    res.status(200).json(product)
})

app.get('/api/v1/query', (req, res) => {
    const maxPrice = parseFloat(req.query.maxPrice);

    if (isNaN(maxPrice)) {
        return res.status(400).json({ error: 'Invalid maxPrice parameter' });
    }

    const filteredProducts = products.filter(product => product.price < maxPrice);

    res.json(filteredProducts);
  })

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found!</h1>')
  })

app.listen(3000, () => console.log("Server is running on port 3000....") )