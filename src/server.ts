// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     console.log('Hello');
//     res.end();
//   }
// });

// server.listen(8000, () => {
//   console.log('Server running on 8000');
// });

// const app = require('./server');

import * as dotenv from "dotenv";
dotenv.config();

import server from "./app";

server.listen(3000, () => {
  console.log("Server on 3000");
});
