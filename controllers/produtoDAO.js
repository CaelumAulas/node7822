
function pegaLivros(conexao, funcaoCallbackSucesso, funcaoCallbackDeuRuim) {
    conexao.query("SELECT * FROM livros", function (erro, resultado) {
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

function cadastraLivros(){
    
}

module.exports = function ProdutoDAO(conexao){
    // private
    const x = ""

    // public
    return {
        lista: (funcaoCallbackSucesso, funcaoCallbackDeuRuim) => 
            pegaLivros(conexao, funcaoCallbackSucesso, funcaoCallbackDeuRuim)
    
        ,save: cadastraLivros
    }
}