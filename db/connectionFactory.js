const mysql = require('mysql')

// Módulo é um singleton
function criaConexao(){
    return mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWD,
        database: process.env.DB_NAME
    })
}

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME
})

function getConnection(){
    return new Promise(function(cbSucesso, cbErro){
        pool.getConnection(function(erro, conexao){
            try {
                if(erro == null){
                    cbSucesso(conexao)
                } else {
                    cbErro(erro)
                }
            } catch(erro){
                cbErro(erro.toString())
            }
        })
    })    
}

module.exports = {
    createConnection: criaConexao
    ,getConnection: getConnection
}