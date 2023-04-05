const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const post = require("./models/post")

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine" , "handlebars")

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/", function(req, res) {
    res.render("primeira_pagina")
})

app.get("/sec", function(req, res) {
    res.render("segunda_pagina")
})

app.post("/cadastrar", function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data: req.body.data,
        observacao: req.body.observacao
    }).then(() => {
        res.send("Dados enviados com sucesso")
    }).catch((erro) => {
        res.send("Erro: Falha ao cadastrar dados: " + erro)
    })
})

app.listen(8081, function(){
    console.log("[server] WORKING http://localhost:8081");
})