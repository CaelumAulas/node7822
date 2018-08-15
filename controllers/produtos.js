const connectionFactory = require("../db/connectionFactory")

function listagemProdutos(req, resp){
    const conexao = connectionFactory.getConnection()

    // Async não criam variável geralmente
    conexao.query("SELECT * FROM livros", function(erro, resultado = []){
        if(erro == null){
            resp.render("produtos/lista.ejs", {livros: resultado})
            conexao.end()
        } else {
            resp.send(erro)
        }
    })
}

function cadastroProdutos(){
    return 
}

// revealing module
module.exports = {
    listagem: listagemProdutos,
    cadastro: cadastroProdutos
}