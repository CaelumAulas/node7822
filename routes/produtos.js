const ProdutosController = require('../controllers/produtos')

module.exports =  function (servidor) {
    servidor.get("/produtos", ProdutosController.listagem)
    servidor.post("/produtos", ProdutosController.cadastro)
}
