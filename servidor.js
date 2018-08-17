const express = require('express')
const servidor = express()

servidor.set("view engine", "ejs")

servidor.use(express.urlencoded())
servidor.use(express.json())

servidor.get("/", function(pedido, resposta) {
    resposta.render("home")
})

require('./routes/produtos')(servidor)

servidor.use(express.static('./static'))

servidor.use(function(erro, req, resp, next){
    if(process.env.NODE_ENV == "dev"){
        resp.send(erro)
    } else {
        console.error(erro)
        resp.render("erros/erro", {
            erro: "500 - Algo deu errado no servidor."
        })
    }
})

servidor.use(function(req, resp){
    resp.render("erros/erro", {
        erro: "404 - Página não encontrada"
    })
})

module.exports = servidor

// const queryString = require('query-string')
// servidor.use(function criaBody(req, resp, callbackNext){
//     console.log("Cria Body")
//     let bodyTexto = ""

//     req.on("data", function(chunk){
//         bodyTexto += chunk.toString()
//     })

//     req.on("end", function(){

//         if(req.headers("Content-Type") === "x-www-formadata-urlencoded"){
//             req.body = queryString.parse(bodyTexto)
//         }
//         callbackNext()
//     })
// })

// servidor.use(function criaBody(req, resp, callbackNext){
//     console.log("Cria Body")
//     let bodyTexto = ""

//     req.on("data", function(chunk){
//         bodyTexto += chunk.toString()
//     })

//     req.on("end", function(){

//         if(req.headers("Content-Type") === "application/json"){
//             req.body = JSON.parse(bodyTexto)
//         }
//         callbackNext()
//     })
// })
