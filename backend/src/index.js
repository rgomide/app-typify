const express = require('express')
const app = express()
const cors = require('cors')
// controllers
const userController = require('./controller/user.controller')
const taskController = require('./controller/task.controller')
const albumController = require('./controller/album.controller')
const postController = require('./controller/post.controller')

// Middleware para permitir requisições de outros domínios
app.use(cors())
// Middleware para converter o corpo das requisições como JSON
app.use(express.json())

// Adiciona as rotas e controllers
app.use('/', userController)
app.use('/', taskController)
app.use('/', albumController)
app.use('/', postController)

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000')
})
