// Importando o Express na aplicação
const express = require("express"); // CommonJS Modules
// Criando uma instância do Express
const app = express();

app.set('view engine', 'ejs')
// CRIANDO A ROTA PRINCIPAL
app.get("/", (req, res) => {
  //Será renderizada a pasta index.ejs que está na página 'views'
  res.render('index');
});

// ROTA PERFIL
// :nome é um parâmetro obrigatório
// :nome? é um parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  // Coletando o parâmetro e guardando na variável
  const nome = req.params.nome;
  res.render('produtos');
  // Verificando se o parâmetro nome existe
  if (nome){
    res.send(`Olá, ${nome}! Seja bem-vindo!`);
  } else {
    res.send(`<h2>Faça login para acessar o seu perfil</h2>`)
  }
 
});

// ROTA DE VÍDEOS
// :playlist? e :video? - parâmetros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  //playlist = true e video = undefined
  if(playlist && video == undefined){
      res.send(`<h2>Você está na playlist de ${playlist}.</h2>`);  
  }
  // Verificando se os dois parâmetros são = true
  if(playlist && video){
      res.send(`<h2>Você está na playlist ${playlist}</h2><br>
        Reproduzindo o vídeo ${video}...`);
  // Se não for informado nenhum parâmetro.
      } else{
      res.send("<h1>Página de vídeos<h1>");
  }
 
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
