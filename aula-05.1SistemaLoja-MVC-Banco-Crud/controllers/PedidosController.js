import express from 'express'
import Cliente from '../models/Clientes.js';
const router = express.Router()

router.get("/pedidos", function (req, res) {
    const pedidos = [

        { cliente: "Valéria Silva", codProduto: 101, produto: "Camisa de Algodão Orgânico", valor: 150 },
        { cliente: "João Pereira", codProduto: 102, produto: "Calça Jeans Sustentável", valor: 250 },
        { cliente: "Maria Costa", codProduto: 103, produto: "Vestido de Linho", valor: 300 },
        { cliente: "Pedro Oliveira", codProduto: 104, produto: "Jaqueta Reutilizada", valor: 400 },
        { cliente: "Ana Souza", codProduto: 105, produto: "Saia de Tecido Ecológico", valor: 200 },
        { cliente: "Lucas Lima", codProduto: 106, produto: "Camiseta de Poliéster Reciclado", valor: 100 },
        { cliente: "Julia Rocha", codProduto: 107, produto: "Shorts de Algodão Orgânico", valor: 120 },
        { cliente: "Carlos Almeida", codProduto: 108, produto: "Macacão de Linho", valor: 350 },
        { cliente: "Renata Martins", codProduto: 109, produto: "Mochila de Material Reciclado", valor: 180 },
        { cliente: "Thiago Ferreira", codProduto: 110, produto: "T-shirt de Algodão Orgânico", valor: 80 },
        { cliente: "Fernanda Mendes", codProduto: 111, produto: "Jaqueta de Lã Reciclada", valor: 450 },
        { cliente: "André Dias", codProduto: 112, produto: "Calça de Algodão Sustentável", valor: 260 },
        { cliente: "Cláudia Nascimento", codProduto: 113, produto: "Blusa de Tencel", valor: 220 },
        { cliente: "Felipe Cardoso", codProduto: 114, produto: "Vestido de Algodão Orgânico", valor: 310 },
        { cliente: "Patrícia Azevedo", codProduto: 115, produto: "Camiseta de Lino", valor: 90 },
        { cliente: "Rodrigo Pimentel", codProduto: 116, produto: "Saia de Poliéster Reciclado", valor: 210 },
        { cliente: "Aline Teixeira", codProduto: 117, produto: "Calça de Tecido Ecológico", valor: 275 },
        { cliente: "Vinícius Santos", codProduto: 118, produto: "T-shirt de Algodão Sustentável", valor: 110 },
        { cliente: "Juliana Castro", codProduto: 119, produto: "Shorts de Lã Reciclada", valor: 130 },
        { cliente: "Roberto Alves", codProduto: 120, produto: "Mochila de Algodão Orgânico", valor: 200 },
        { cliente: "Sofia Martins", codProduto: 121, produto: "Camisa de Linho", valor: 175 },
        { cliente: "Eduardo Rocha", codProduto: 122, produto: "Jaqueta de Algodão Sustentável", valor: 500 },
        { cliente: "Luana Silva", codProduto: 123, produto: "Camiseta de Poliéster Reciclado", valor: 95 },
        { cliente: "Marcos Pinto", codProduto: 124, produto: "Vestido de Algodão Orgânico", valor: 290 },
        { cliente: "Isabela Ferreira", codProduto: 125, produto: "Saia de Tecido Ecológico", valor: 230 },
        { cliente: "Diego Ramos", codProduto: 126, produto: "Calça de Linho", valor: 280 },
        { cliente: "Camila Barros", codProduto: 127, produto: "T-shirt de Algodão Orgânico", valor: 120 },
        { cliente: "Thiago Lima", codProduto: 128, produto: "Jaqueta de Lã Reciclada", valor: 460 },
        { cliente: "Nathalia Gomes", codProduto: 129, produto: "Macacão de Algodão Sustentável", valor: 370 },
        { cliente: "Gabriel Lopes", codProduto: 130, produto: "Blusa de Tencel", valor: 240 },
        { cliente: "Mariana Souza", codProduto: 131, produto: "Calça Jeans Sustentável", valor: 260 },
        { cliente: "Ricardo Santos", codProduto: 132, produto: "Camiseta de Lino", valor: 100 },
        { cliente: "Fernanda Lima", codProduto: 133, produto: "Saia de Poliéster Reciclado", valor: 220 },
        { cliente: "Leandro Almeida", codProduto: 134, produto: "T-shirt de Algodão Sustentável", valor: 85 },
        { cliente: "Patrícia Silva", codProduto: 135, produto: "Jaqueta de Algodão Orgânico", valor: 480 },
        { cliente: "César Araújo", codProduto: 136, produto: "Mochila de Material Reciclado", valor: 190 },
        { cliente: "Lívia Carvalho", codProduto: 137, produto: "Shorts de Algodão Orgânico", valor: 130 },
        { cliente: "Eduardo Lima", codProduto: 138, produto: "Calça de Algodão Sustentável", valor: 275 },
        { cliente: "Bianca Castro", codProduto: 139, produto: "Vestido de Linho", valor: 310 },
        { cliente: "Felipe Mendes", codProduto: 140, produto: "Blusa de Tencel", valor: 220 },
        { cliente: "Patrícia Dias", codProduto: 141, produto: "Camiseta de Poliéster Reciclado", valor: 90 },
        { cliente: "Marcos Lima", codProduto: 142, produto: "Jaqueta de Lã Reciclada", valor: 450 },
        { cliente: "Sabrina Martins", codProduto: 143, produto: "Calça Jeans Sustentável", valor: 250 },
        { cliente: "Vinícius Santos", codProduto: 144, produto: "Saia de Tecido Ecológico", valor: 200 },
        { cliente: "Mariana Alves", codProduto: 145, produto: "Macacão de Algodão Orgânico", valor: 370 },
        { cliente: "Lucas Ribeiro", codProduto: 146, produto: "T-shirt de Algodão Sustentável", valor: 100 },
        { cliente: "Letícia Fernandes", codProduto: 147, produto: "Camiseta de Lino", valor: 85 },
        { cliente: "Anderson Costa", codProduto: 148, produto: "Jaqueta de Algodão Sustentável", valor: 460 },
        { cliente: "Jéssica Pacheco", codProduto: 149, produto: "Mochila de Algodão Orgânico", valor: 200 },
        { cliente: "Fernanda Mendes", codProduto: 150, produto: "Saia de Poliéster Reciclado", valor: 210 }

    ]
    res.render("pedidos", {

        pedidos: pedidos
    })
})

router.post("/pedidos/new", (req, res) => {
    const cliente = req.body.cliente
    const codProduto = req.body.codProduto
    const produto = req.body.produto
    const valor = req.body.valor
    Pedido.create({
        cliente: cliente,
        codProduto: codProduto,
        produto: produto,
        valor: valor
    }).then(() => {
        res.redirect("/pedidos")
    })
})

router.get("/pedidos/delete/:id?", (req, res) => {
    const id = req.params.id

    Pedido.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/pedidos/")
    }).catch((error) => {
        console.log(error)
    });
});

router.get("/pedidos/edit/:id", (req, res) => {
    const id = req.params.id
    Pedido.findByPk(id).then((pedido) => {
        res.render("pedidoEdit", {
            pedido: pedido,
        });
    });
});

router.post("/pedidos/update", (req, res) => {
    const id = req.body.id
    const cliente = req.body.cliente
    const produto = req.body.produto
    const valor = req.body.valor
    Pedido.update(
        {
            cliente: cliente,
            produto: produto,
            valor: valor
        },
        { where: { id: id } }
    ).then(() => {
        res.redirect("/pedidos")
    }).catch((error) => {
        console.log(error)
    })
})

export default router

