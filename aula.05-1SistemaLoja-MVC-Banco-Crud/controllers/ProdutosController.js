import express from 'express'
const router = express.Router()

router.get("/produtos", function(req,res){
    const produtos = [
        {
            produto: "Calça de Tecido Ecológico", imagem: "/imgs/img4.jpg", valor: "R$ 129,90"
          },
          { produto: "Calça de Linho", imagem: "/imgs/img5.webp", valor: "R$ 99,90" },
          { produto: "T-shirt de Algodão Orgânico", imagem: "/imgs/img6.webp", valor: "R$ 49,90" },
          { produto: "Jaqueta de Lã Reciclada", imagem: "/imgs/img7.webp", valor: "R$ 199,90" },
          { produto: "Macacão de Algodão", imagem: "/imgs/img8.webp", valor: "R$ 159,90" },
          { produto: "Blusa de Tencel", imagem: "/imgs/img9.jpg", valor: "R$ 89,90" },
          { produto: "Calça Jeans Sustentável", imagem: "/imgs/img10.webp", valor: "R$ 149,90" },
          { produto: "Camiseta de Lino", imagem: "/imgs/img11.jpg", valor: "R$ 59,90" },
          { produto: "Saia de Poliéster Reciclado", imagem: "/imgs/img12.jpg", valor: "R$ 79,90" },
          { produto: "T-shirt de Algodão Sustentável", imagem: "/imgs/img13.webp", valor: "R$ 54,90" },
          { produto: "Jaqueta de Algodão Orgânico", imagem: "/imgs/img14.jpeg", valor: "R$ 199,90" },
          { produto: "Mochila de Material Reciclado", imagem: "/imgs/img15.webp", valor: "R$ 139,90" },
          { produto: "Shorts de Algodão Orgânico", imagem: "/imgs/img16.png", valor: "R$ 69,90" },
          { produto: "Calça de Algodão Sustentável", imagem: "/imgs/img17.webp", valor: "R$ 119,90" },
          { produto: "Vestido de Linho", imagem: "/imgs/img18.jpg", valor: "R$ 159,90" },
          { produto: "Blusa de Tencel", imagem: "/imgs/img19.jpg", valor: "R$ 79,90" },
          { produto: "Camiseta de Poliéster Reciclado", imagem: "/imgs/img20.webp", valor: "R$ 59,90" },
          { produto: "Jaqueta de Lã Reciclada", imagem: "/imgs/img21.webp", valor: "R$ 199,90" },
          { produto: "Saia de Tecido Ecológico", imagem: "/imgs/img22.webp", valor: "R$ 89,90" },
          { produto: "Macacão de Algodão Orgânico", imagem: "/imgs/img23.jpg", valor: "R$ 159,90" }

    ]
    res.render("produtos",{
        produtos:produtos
    })
})

export default router









