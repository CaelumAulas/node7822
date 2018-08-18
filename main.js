require("dotenv").config()

const servidor = require('./servidor')

const porta = process.env.NODE_PORT

servidor.listen(porta, function subiu(){  
    console.log("Servidor subiu em http://localhost:" + porta)
})

// Node pediu a porta, mas não sei o que aconteceu