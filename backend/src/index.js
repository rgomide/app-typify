const express = require('express')
const app = express()
const cors = require('cors')
// controllers
const userController = require('./controller/user.controller')

// Middleware para permitir requisições de outros domínios
app.use(cors())
// Middleware para converter o corpo das requisições como JSON
app.use(express.json())

// Adiciona as rotas e controllers
app.use('/', userController)

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000')
})
