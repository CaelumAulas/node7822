
function pegaLivros(conexao, funcaoCallbackSucesso, funcaoCallbackDeuRuim) {
    conexao.query("SELECT * FROM Livros", function (erro, resultado) {
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
    return {
        lista: (funcaoCallbackSucesso, funcaoCallbackDeuRuim) => 
            pegaLivros(conexao, funcaoCallbackSucesso, funcaoCallbackDeuRuim)
    
        ,save: cadastraLivros
    }
}