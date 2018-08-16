class ProdutoDAO{

    constructor(conexao){
        this.conexao = conexao
    }

    lista(funcaoCallbackSucesso, funcaoCallbackDeuRuim) {
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
        })
    }

    save(){}

}

module.exports = ProdutoDAO