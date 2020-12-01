'use strict'

const express = require('express')
const PORT = 3001;
const HOST = '0.0.0.0';
const app = express();

app.get('/', (req, res) => {
  res.send('hello docker\n');
})
app.get('/json', (req, res) => {
  res.json({
    code: 200,
    data: "This is a message from node container"
  })
})

app.listen(PORT, HOST);