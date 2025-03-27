const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header for content type
  res.setHeader('Content-Type', 'text/html');

  // Check the URL of the request and send a response based on that
  if (req.url === '/') {
    // If the URL is the root, send this message
    res.statusCode = 200;
    res.end('<h1>Welcome to the Home Page!</h1>');
  } else if (req.url === '/about') {
    // If the URL is '/about', send this message
    res.statusCode = 200;
    res.end('<h1>About Us</h1><p>This is a simple web server built using Node.js!</p>');
  } else {
    // For any other URL, send a 404 Not Found message
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1><p>The page you requested does not exist.</p>');
  }
});

// The server listens on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});