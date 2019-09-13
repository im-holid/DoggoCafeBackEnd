const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
// const port = process.env.port || 3000



app.use(bodyParser.json())

const menusController = require('../controller/menusController')

app.group("/api/v1/", (router) => {
    router.get('/menus', menusController.index)
    router.get('/menu/:id', menusController.show)
    router.get('/menuByCategory/:id', menusController.showByCategory)
    router.post('/menu', menusController.store)
    router.patch('/menu/:id', menusController.update)
})

module.exports = app