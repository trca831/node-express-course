const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('welcome to home page')
    }
    // res.write('Welcome to our home page');
    // res.end()
    if(req.url === '/about'){
        res.end('short history')
    }
    res.end(`
    <h1> oops! </h1>
    <p>we cannot find page! </p>
    <a href="/"> back home </a>
    `)
})

server.listen(5000);