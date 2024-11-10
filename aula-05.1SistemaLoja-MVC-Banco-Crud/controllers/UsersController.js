import express from "express";
const router = express.Router();
import Users from "../models/Users.js";
import bcrypt from "bcrypt"
// ROTA DE LOGIN
router.get("/login", (req, res) => {
    res.render("login", {
        loggedOut: true,
        messages: req.flash()
    });
});

router.get("/logout", (req, res) => {
    req.flash('success', "Usuário fez logout com sucesso!")
    req.session.users = undefined;
    res.redirect("/");
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
    res.render("cadastro", {
        loggedOut: true,
        messages: req.flash()
    });
});

// ROTA DE CRIAÇÃO DE USUÁRIO
router.post("/createUsers", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // VERIFICAR SE O USUÁRIO JÁ ESTÁ CADASTRADO
    Users.findOne({ where: { email: email } }).then((users) => {
        if (users == undefined) {
            // AQUI É FEITO O CADASTRO E O HASH DE SENHA
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            Users.create({
                email: email,
                password: hash,
            }).then(() => {
                res.redirect("/login");
            });
            // CASO O USUÁRIO JÁ ESTEJA CADASTRADO:
        } else {

            req.flash('danger', "O usuário já está cadastrado! Faça o login.")
            res.redirect("/cadastro")
        }
    });
});

// ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
    const email = req.body.email
    const password = req.body.password
    // BUSCA O USUÁRIO NO BANCO
    Users.findOne({
        where: {
            email: email
        }
    }).then((users => {
        // SE O USUÁRIO TIVER CADASTRADO:
        if (users != undefined) {
            // VALIDA A SENHA (VERIFICA O HASH)
            const correct = bcrypt.compareSync(password, users.password)
            if (correct) {
                // AUTORIZA O LOGIN
                req.session.users = {
                    id: users.id,
                    email: users.email
                }
                //res.send(`Usuário logado: <br> ID: ${req.session.users['id']}<br>Email: ${req.session.users['email']}`)
                // ENVIAR UMA MENSAGEM DE SUCESSO
                req.flash('success', "Login efetuado com sucesso!")
                res.redirect("/");
            } else {
                req.flash('danger', "Senha informada está incorreta! Tente novamente.")
                res.redirect("/login")
            }
        }
        else {
            // SE O USUÁRIO NÃO EXISTE 
            req.flash('danger', "Usuário informado não existe! Verifique os dados digitados.")
            res.redirect("/login")
        }
    })).catch((error) => {
        console.log(error);
    });
})


export default router;