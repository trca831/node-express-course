
console.log('Express Tutorial')
//Edit app.js to add all the elements of an Express application as listed above, in the right order. 
//You won’t have any app.get or app.post statements yet. 
// You should have the statement app.use(express.static("./public")) 
// so that your HTML file will load. Use port 3000 in the listen statement.
//The basic elements of an Express.js program are as follows:

//The require statement to import the express module
const express = require('express');
const { products } = require("./data");
//Creation of the app as returned from calling express()
const app = express()

const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time) 
}

//app.use statements for the middleware. 
app.use(express.static('./public'))
// You’ll eventually use many kinds of middleware, 
// but for now the only middleware we are using is express.static().
//app.get and app.post statements for the routes you will handle. 


app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})
app.post('/hello', (req, res) => {
    res.send('Hello, Here is a Post Request!');
});
// Route to return the products data
app.get('/api/v1/products', (req, res) => {
    res.json(products); // Return the products array as JSON
});

// Route to return a specific product by ID
app.get('/api/v1/products/:productID', (req, res) => {
    // Get the productID from the URL parameter and convert it to an integer
    const idToFind = parseInt(req.params.productID);

    // Find the product with the matching ID
    const product = products.find((p) => p.id === idToFind);

    // If the product is found, return it as JSON; otherwise, return a 404 error
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "That product was not found" });
    }
});

// Route for responding with JSON data (to demonstrate res.json)
// Route for the /api/v1/test URL
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

// Route to handle search and limit query parameters
app.get('/api/v1/query', (req, res) => {
    const { search, limit, maxPrice } = req.query;

    // Start with all products
    let filteredProducts = products;

        // If a search term is provided, apply a regular expression filter
        if (search) {
            try {
                const regex = new RegExp(search, 'i'); // Create a case-insensitive regex
                filteredProducts = filteredProducts.filter(product => regex.test(product.name));
            } catch (error) {
                return res.status(400).json({ message: "Invalid regular expression." });
            }
        }
    // If a maxPrice is provided, filter products based on price
    if (maxPrice) {
        const maxPriceValue = parseFloat(maxPrice);
        if (!isNaN(maxPriceValue) && maxPriceValue > 0) {
            filteredProducts = filteredProducts.filter(product => {
                    const productPrice = parseFloat(product.price); // Ensure price is a number
                    console.log(`Product Price: ${productPrice}, Max Price: ${maxPriceValue}`); // Debugging line
                    return productPrice < maxPriceValue;
            });
        } else {
            return res.status(400).json({ message: "Invalid maxPrice value." });
        }
    }

    // If a limit is provided, slice the products array to limit the results
    if (limit) {
        const limitNumber = parseInt(limit);
        if (!isNaN(limitNumber) && limitNumber > 0) {
            filteredProducts = filteredProducts.slice(0, limitNumber);
        } else {
            return res.status(400).json({ message: "Invalid limit value." });
        }
    }

    // Return the filtered products as JSON
    res.json(filteredProducts);
});



// Eventually these will be refactored into router modules, but for now you can put them inline.
//An app.all statement after these to handle page not found conditions.
app.all('*', (req, res) => {
    res.status(404).send('PAGE NOT FOUND')
})
//An app.listen statement to tell the server to listen for requests on a particular port.
app.listen(3000, () => {
    console.log('server is listening on port 3000...')
})