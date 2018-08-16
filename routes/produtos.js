const ProdutosController = require('../controllers/produtos')

module.exports =  function (servidor) {
    servidor.get("/produtos", ProdutosController.listagem)
    servidor.get("/produtos/form", ProdutosController.form)
    servidor.post("/produtos", ProdutosController.cadastro)
}
