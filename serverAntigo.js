const http = require('http')

const servidor = http.createServer(function (pedido, resposta){
    if(pedido.url == "/" && pedido.method == "GET")
        resposta
        .writeHead()
        .end("teste.html")
    else if(pedido.url == "/admin")
        resposta.end("Admin")
    else
        resposta.end("404")

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