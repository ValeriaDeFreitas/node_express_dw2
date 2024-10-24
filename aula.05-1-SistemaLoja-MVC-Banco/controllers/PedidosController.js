import express from 'express'
import Cliente from '../models/Cliente'
const router = express.Router()

// ROTA PEDIDOS
router.get("/pedidos",function(req,res){
    const pedidos = [
        {numero: "983721931", valor: 1200},
        {numero: "983721932", valor: 900},
        {numero: "983721933", valor: 3200},
        {numero: "983721934", valor: 150}
    ]
    res.render("pedidos", {
        pedidos: pedidos
    })
})

router.post("/pedidos/new", (req,res) => {

    const numero = req.body.numero
    const valor = req.body.valor
    Pedido.create({

        numero: numero,
        valor: valor,
    }).then(() => {
        res.redirect("/pedidos")
    })
})

router.get("/pedidos/delete/:id?", (req,res) => {
    const id = req.params.id

    Pedido.destroy({
        where:{
            id : id
        }
    }).then(() => {
        res.redirect("/pedidos/")
    }).catch((error) => {
        console.log(error)
    })
})

router.get("/pedidos/edit/:id", (req, res) => {
    const id = req.params.id
    Pedido.findByPk(id).then((pedido)=> {
        res.render("pedidoEdit",{
            pedido: pedido,
        });
    }).catch((error) => {
        console.log(error)
    })
});

router.post("/pedidos/update", (req,res) => {
    const id = req.body.id
    const numero = req.body.numero
    const valor = req.body.valor
    Pedido.update(
        {
            numero: numero,
            valor: valor
        },
        {where: {id: id}}
    ).then(() => {
        res.redirect("/pedidos")
    }).catch((error) => {
        console.log(error)
    })
})


export default router