const model = require('../models')
const Orders = model.orders
const Menus = model.menus
const Transactions = model.transactions

exports.index = (req, res) => {
    Orders.findAll({
        include:[{
            model: Menus,
            as:"menu_id"
        },
        {
            model : Transactions,
            as : 'transaction_id'
        }
    
    ]
    }).then(data => res.send(data))
}

exports.show = (req, res) => {
    Orders.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}

exports.showByMenu = (req, res) => {
    Orders.findAll(
        {where : {menuID : req.params.id}
    }).then(data => res.send(data))
}

exports.showByTransaction = (req, res) => {
    Orders.findAll(
        {where : {transactionID : req.params.id}
    }).then(data => res.send(data))
}

exports.store = (req, res) => {    
            Orders.create(req.body).then(blabla => {
                res.send({
                    messages: blabla.id
                    
            })
        })
    }

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Orders.update(req.body,{where : {id: req.params.id}}).then(hubahuba => {
        res.send({
            Pesan: 'Sukses',
            Updated : hubahuba.name
        })
    })
}

exports.destroy = (req, res) => {
    Orders.destroy(
        {where: {id: req.params.id}
    }).then(() => {
        res.send({
            messages: 'Berhasil Dihapus',
        })
    })
}