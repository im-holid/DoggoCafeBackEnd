const express = require('express')
require('express-group-routes')

const app = express()




const categoryController = require('../controller/categoriesController')

app.group("/api/v1/", (router) => {
    router.get('/categories', categoryController.index)
    router.get('/category/:id', categoryController.show)
    router.post('/category', categoryController.store)
    // router.patch('/user/:id', userController.update)
})

module.exports = app