const express = require('express')
const app = express()
app.use(express.json())

const nomes = [
  {
    nome: "Júlio", 
    cpf: "32423423-212",
    deploy: "sucesso!",
  },
  {
    nome: "Pedro",
    cpf: "32423423-212",
    deploy: "sucesso!",
  }
]

app.get('/', function (req, res) {
  res.status(200).json(nomes)
})

app.listen(process.env.PORT || 3000)