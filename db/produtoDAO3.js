class ProdutoDAO{

    constructor(conexao){
        this.conexao = conexao
    }

    lista() {
        const conexao = this.conexao
        return new Promise(function(resolve, reject){
            conexao.query("SELECT * FROM livros", function (erro, resultado) {
                try {
                    if (erro == null) {
                        resolve(resultado);
                    }
                    else {
                        reject(erro);
                    }
                }
                catch (erro) {
                    reject(erro.toString());
                }
            })
        })
        
    }

    save(livro){
        return new Promise((resolve, reject) => {
            this.conexao.query("INSERT INTO livros SET ?", livro, function(erro) {
                try{
                    if(erro == null){
                        resolve()
                    } else {
                        reject(erro)
                    }
                } catch(error) {
                    reject(error.toString())
                }     
            })
        })
    }

}

module.exports = ProdutoDAO