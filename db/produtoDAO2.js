function ProdutoDAO(conexao){
    this.conexao = conexao
}


ProdutoDAO.prototype.lista = function(funcaoCallbackSucesso, funcaoCallbackDeuRuim) {
    this.conexao.query("SELECT * FROM livros", function (erro, resultado) {
        try {
            if (erro == null) {
                funcaoCallbackSucesso(resultado);
            }
            else {
                funcaoCallbackDeuRuim(erro);
            }
        }
        catch (erro) {
            funcaoCallbackDeuRuim(erro.toString());
        }
    });
}


ProdutoDAO.prototype.save = function (){
    
}

module.exports = ProdutoDAO