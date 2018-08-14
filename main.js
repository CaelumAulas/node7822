const express = require('express')

const servidor = express()

servidor.get("/", function(pedido, resposta) {
    resposta.render("home.ejs")
})

servidor.get("/produtos", function(req, resp){
    const livros = [
        {
            titulo: "Livro 1"
            ,preco: 50
            ,descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            
        }
        ,{
            titulo: "Livro 2"
            ,preco: 60
            ,descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            
        }
    ]

    const objetoTemplate = {
        livros: livros
    }

    resp.render("produtos/lista.ejs", objetoTemplate)
})

// testar antes de rodar no trminal => export NODE_PORT=5100
if(process.env.NODE_PORT == undefined) {
    process.env.NODE_PORT = 3000
}

const porta = process.env.NODE_PORT

servidor.listen(porta, function subiu(){
    console.log("Servidor subiu em http://localhost:" + porta)
})

// Node pediu a porta, mas não sei o que aconteceu