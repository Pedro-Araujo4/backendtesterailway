const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.status(200).send('Deploy backend bem-sucedido!')
})

app.listen(process.env.PORT || 3000)