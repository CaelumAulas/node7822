// função construtora
const ProdutoDAO = require("./produtoDAO3")

const connectionFactory = require("../db/connectionFactory")

function listagemProdutos(req, resp){
    const conexao = connectionFactory.getConnection()

    const produtoDAO = new ProdutoDAO(conexao)
    
    produtoDAO.lista(
        function success(resultado = []){
            resp.render("produtos/lista.ejs", {livros: resultado})

            conexao.end()
        }
        , function error(erro){
            resp.send(erro)
        }
    )
}

function cadastroProdutos(){
    produtoDAO.save()
}

// revealing module
module.exports = {
    listagem: listagemProdutos,
    cadastro: cadastroProdutos
}