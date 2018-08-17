// função construtora
const ProdutoDAO = require("./produtoDAO3")

const connectionFactory = require("../db/connectionFactory")

function listagemProdutos(req, resp){
    const conexao = connectionFactory.getConnection()

    const produtoDAO = new ProdutoDAO(conexao)
    
    produtoDAO.lista(
        function success(resultado = []){
            resp.render("produtos/lista", {livros: resultado})

            conexao.end()
        }
        , function error(erro){
            resp.send(erro)
        }
    )
}

function mostraForm(req, resp){
    resp.render('produtos/form', {
        validationErrors: []
    })
}

const queryString = require('query-string')
function cadastroProdutos(req, resp){

    let bodyTexto = ""

    req.on("data", function(chunk){
        bodyTexto += chunk.toString()
    })
    
    req.on("end", function(){
        req.body = queryString.parse(bodyTexto)

        const livro = req.body

        const conexao = connectionFactory.getConnection()
        const produtoDAO = new ProdutoDAO(conexao)

        produtoDAO.save(
            livro
            , function(){
                resp.redirect('/produtos')
            }
            , function(erro) {
                resp.send(erro)
            }
        )
    })
}

// revealing module
module.exports = {
    listagem: listagemProdutos,
    form: mostraForm,
    cadastro: cadastroProdutos
}