const model = require('../models')
const Transactions = model.transactions

exports.index = (req, res) => {
    Transactions.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    Transactions.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}

exports.store = (req, res) => {    
            Transactions.create(req.body).then(data => {
                res.send(data)
        })
    }

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Transactions.update(req.body,{where : {id: req.params.id}}).then(data => {
        res.send(data)
    })
}

exports.destroy = (req, res) => {
    Transactions.destroy(
        {where: {id: req.params.id}
    }).then(() => {
        res.send({
            messages: 'Berhasil Dihapus',
        })
    })
}