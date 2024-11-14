const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
  res.send('Hello World 2')
})

app.listen(process.env.PORT || 3000)