const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
// const port = process.env.port || 3000





const orderController = require('../controller/orderController')

app.group("/api/v1/", (router) => {
    router.get('/orders', orderController.index)
    router.get('/order/:id', orderController.show)
    router.get('/orderByMenu/:id', orderController.showByMenu)
    router.get('/orderByTransaction/:id', orderController.showByTransaction)
    router.post('/order', orderController.store)
    router.patch('/order/:id', orderController.update)
    router.delete('/order/:id', orderController.destroy)
})

module.exports = app