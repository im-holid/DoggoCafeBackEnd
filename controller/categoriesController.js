const model = require('../models')
const Categories = model.categories

exports.index = (req, res) => {
    Categories.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    Categories.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}

exports.store = (req, res) => {
    const {name} = req.body

    Categories.create({
        name: name,
    }).then(user => {
        res.send({
            messages: "success",
            user:user.name
        })
    }).catch(err => {
        res.send({
            status : 'error',
            msg : err
        })
    })
}

