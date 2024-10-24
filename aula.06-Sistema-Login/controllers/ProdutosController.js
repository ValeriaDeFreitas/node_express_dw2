import express from 'express'
import Produto from "../models/Produto.js"

const router = express.Router()

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
    Produto.findAll().then(produtos => {
        res.render("produtos", { produtos: produtos })
    })

})
router.post("/produtos/new", function (req, res) {
    try {
        const produtoDados = req.body;
        const produto = Produto.create({ nome: produtoDados.nome, preco: produtoDados.preco, categoria: produtoDados.categoria, })
        res.status(201).send("Cadastrado")
    } catch (e) {
        console.error("erro", e);
        res.status(400);
    }
})

router.get("/produtos/delete/:id", (req, res) => {
    const id = req.params.id
    Produto.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/produtos")
    })
})

router.get("/produtos/edit/:id", (req, res) => {
    const id = req.params.id
    Produto.findByPk(id).then(function (produto) {
        res.render("produtoEdit", {
            produto: produto
        })
    })
})

router.post("/produtos/update/:id", (req, res) => {
    const id = req.params.id
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    Produto.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco
        },
        { where: { id: id } }
    ).then(() => {
        res.redirect("/produtos")
    })
})

export default router;