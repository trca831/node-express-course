const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// Variables for the calculator
let num1 = "";
let num2 = "";
let operation = "";
let result = "";
let feedback = "";

// The form for the calculator
const form = () => {
  return `
  <style>
    body {
      background-color: #f0f8ff;
      color: #333;
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }
    h1 {
      color: #4CAF50;
    }
    form {
      margin: 20px 0;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: inline-block;
    }
    input, select, button {
      padding: 10px;
      margin: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #45a049;
    }
    p {
      font-size: 18px;
    }
    .result {
      font-size: 20px;
      color: #007BFF;
      font-weight: bold;
    }
    .feedback {
      font-size: 18px;
      color: #d9534f;
    }
  </style>
  <body>
    <h1>A Calculator</h1>
    <p>Enter two numbers and select an operation:</p>
    <form method="POST">
      <input name="num1" type="number" value="${num1}" required></input>
      <input name="num2" type="number" value="${num2}" required></input>
      <select name="operation">
        <option value="add" ${operation === "add" ? "selected" : ""}>Add</option>
        <option value="subtract" ${operation === "subtract" ? "selected" : ""}>Subtract</option>
        <option value="multiply" ${operation === "multiply" ? "selected" : ""}>Multiply</option>
        <option value="divide" ${operation === "divide" ? "selected" : ""}>Divide</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
    <p class="feedback">${feedback}</p>
    <p class="result">Result: ${result}</p>
  </body>
  `;
};

const calculate = (num1, num2, operation) => {
  let res;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  if (operation === "add") {
    res = num1 + num2;
  } else if (operation === "subtract") {
    res = num1 - num2;
  } else if (operation === "multiply") {
    res = num1 * num2;
  } else if (operation === "divide") {
    if (num2 === 0) {
      return "Cannot divide by zero!";
    }
    res = num1 / num2;
  } else {
    return "Invalid operation.";
  }
  return res;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);

  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      
      // Get the values from the form
      num1 = body["num1"];
      num2 = body["num2"];
      operation = body["operation"];

      // Perform the calculation
      result = calculate(num1, num2, operation);
      
      // Provide feedback to the user
      feedback = `You chose to ${operation} ${num1} and ${num2}.`;

      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");