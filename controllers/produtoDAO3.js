class ProdutoDAO{

    constructor(conexao){
        this.conexao = conexao
    }

    lista(funcaoCallbackSucesso, funcaoCallbackDeuRuim) {
        this.conexao.query("SELECT * FROM Livros", function (erro, resultado) {
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

    save(livro, cbSucesso, cbErro){
        this.conexao.query("INSERT INTO livros SET ?", livro, function(erro){
            try{
                if(erro == null){
                    cbSucesso()
                } else {
                    cbErro(erro)
                }
            } catch(error) {
                cbErro(error.toString())
            }     
        })
    }

}

module.exports = ProdutoDAO