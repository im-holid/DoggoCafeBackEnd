const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
// const port = process.env.port || 3000



app.use(bodyParser.json())

const transactionController = require('../controller/transactionController')

app.group("/api/v1/", (router) => {
    router.get('/transactions', transactionController.index)
    router.get('/transaction/:id', transactionController.show)
    router.post('/transaction', transactionController.store)
    router.patch('/transaction/:id', transactionController.update)
    router.delete('/transaction/:id', transactionController.destroy)
})

module.exports = app