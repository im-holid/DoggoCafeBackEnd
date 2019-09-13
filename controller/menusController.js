const model = require('../models')
const Menus = model.menus
const Categories = model.categories

exports.index = (req, res) => {
    Menus.findAll().then(data => res.send(data))
}

exports.show = (req, res) => {
    Menus.findOne(
        {where : {id : req.params.id}
    }).then(data => res.send(data))
}

exports.showByCategory = (req, res) => {
    Menus.findAll(
        {where : {categoryId : req.params.id}
    }).then(data => res.send(data))
}

exports.store = (req, res) => {    
            Menus.create({
                categoryId : req.body.categoryId,
                name : req.body.name,
                price : req.body.price,
                image : req.body.image

            }).then(Menus => {
                res.send({
                    messages: "success",
                    Menus:Menus.name
            })
        })
    }

exports.update = (req, res) => {
    // const {name, email, password} = req.body
    Menus.update(req.body,{where : {id: req.params.id}}).then(Menus => {
        res.send({
            Pesan: 'Sukses',
        })
    })
}

exports.destroy = (req, res) => {
    Menus.destroy(
        {where: {id: req.params.id}
    }).then(product => {
        res.send({
            messages: 'Berhasil Dihapus',
        })
    })
}