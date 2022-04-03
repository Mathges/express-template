// import de express
const express = require('express')

// création du server comme app express
const app = express();

// paramétrage du server
app.set('port', 3000)
app.set('baseUrl', 'http://localhost:')

// mise en écoute de l'app (du server)
const server = app.listen(app.get('port'), () => {
    console.log(`Server listening on ${app.get('baseUrl')}${app.get('port')}`)
})

//export du server
module.exports = server;