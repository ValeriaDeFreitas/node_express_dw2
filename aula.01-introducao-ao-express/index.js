//Importando o express na nossa aplicação
const express = require("express"); //CommonJS Modules
//Criando uma instância do Express
const app = express();

//Criando a rota principal
//ROTA PERFIL
// :nome é um parâmetro obrigatório
// :nome? é um parâmetro opcional
app.get("/perfil/:nome?", function(req, res){
   //Coletando o pârametro e guardando na variável
    const nome = req.params.nome
})

//Iniciando o servidor na porta 8080
if(nome){
    res.send(`Olá ${nome}! Seja bem-vindo!`)
}