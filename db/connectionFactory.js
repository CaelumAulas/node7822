const mysql = require('mysql')

// Módulo é um singleton
function criaConexao(){
    console.log("Criando conexão")
    return mysql.createConnection({
        host: "localhost",
        port: 32768,
        user: "root",
        password: "",
        database: "cdc"
    })
}

module.exports = {
    getConnection: criaConexao
}