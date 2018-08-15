function listagemProdutos(req, resp){
    const livros = [
        {
            titulo: "Livro 1"
            ,preco: 50
            ,descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            
        }
        ,{
            titulo: "Livro 2"
            ,preco: 60
            ,descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
            
        }
    ]

    resp.render("produtos/lista.ejs", {livros})
}

function cadastroProdutos(){
    return 
}

// revealing module
module.exports = {
    listagem: listagemProdutos,
    cadastro: cadastroProdutos
}