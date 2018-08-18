// função construtora
const ProdutoDAO = require("../db/produtoDAO3")

const connectionFactory = require("../db/connectionFactory")

function listagemProdutos(req, resp, callbackNext){
    const promiseConexao = connectionFactory.getConnection()

    promiseConexao
        .then(function(conexao){
            const produtoDAO = new ProdutoDAO(conexao)
            return produtoDAO.lista()
        })
        .then(function success(resultado = []){                        
            resp.format({
                json: () => resp.send({livros: resultado})
                ,html: () => resp.render("produtos/lista", {livros: resultado})
            })    
            return promiseConexao                
        })
        .then(function(conexao){
            conexao.release()
        })
        .catch(function(erro){
            callbackNext(erro)
        })
}

function mostraForm(req, resp){
    resp.render('produtos/form', {
        validationErrors: []
    })
}

function cadastroProdutos(req, resp, callbackNext){
    const livro = req.body

    req.assert('preco',  "Preço inválido").isNumeric()
    req.assert('titulo', "Título obrigatório").notEmpty()

    let listaErros = req.validationErrors()

    if(!listaErros){
        const conexao = connectionFactory.createConnection()
        const produtoDAO = new ProdutoDAO(conexao)
    
        produtoDAO.save(
            livro
            , function(){
                resp.redirect('/produtos')
            }
            , function(erro) {
                callbackNext(erro)
            }
        )
    } else {
        resp
            .status(400)
            .render('produtos/form', {
                validationErrors: listaErros
            })
    }
}

// revealing module
module.exports = {
    listagem: listagemProdutos,
    form: mostraForm,
    cadastro: cadastroProdutos
}