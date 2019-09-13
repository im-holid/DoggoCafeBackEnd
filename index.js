const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = process.env.port || 3000

app.use(bodyParser.json())

const categoryRoutes = require('./routes/categoryRoutes')
const menusRoutes = require('./routes/menusRoutes')
const transactionRoutes = require('./routes/transactionRoutes')
const orderRoutes = require('./routes/orderRoutes')

app.get('/', (req, res) => {
    res.send('Server telah jalan cuuuk !!!')
})

app.use(categoryRoutes)
app.use(menusRoutes)
app.use(transactionRoutes)
app.use(orderRoutes)

app.listen(port, () => console.log(`server running on port ${port}!!`))