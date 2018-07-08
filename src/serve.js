const path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, '..\\dist')));
console.log('Serving /dist folder on http://localhost:3000');
app.listen(3000);