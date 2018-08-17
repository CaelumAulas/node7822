// função construtora
const ProdutoDAO = require("./produtoDAO3")

const connectionFactory = require("../db/connectionFactory")

function listagemProdutos(req, resp, callbackNext){
    const conexao = connectionFactory.getConnection()

    const produtoDAO = new ProdutoDAO(conexao)
    
    produtoDAO.lista(
        function success(resultado = []){
            resp.render("produtos/lista", {livros: resultado})

            conexao.end()
        }
        , function error(erro){
            callbackNext(erro)
        }
    )
}

function mostraForm(req, resp){
    resp.render('produtos/form', {
        validationErrors: []
    })
}

function cadastroProdutos(req, resp, callbackNext){
    const livro = req.body

    const conexao = connectionFactory.getConnection()
    const produtoDAO = new ProtoDAO(conexao)

    produtoDAO.save(
        livro
        , function(){
            resp.redirect('/produtos')
        }
        , function(erro) {
            callbackNext(erro)
        }
    )
}

// revealing module
module.exports = {
    listagem: listagemProdutos,
    form: mostraForm,
    cadastro: cadastroProdutos
}