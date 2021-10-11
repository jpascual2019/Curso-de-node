const express = require('express');
var cors = require('cors');

class Server {

    constructor () {
        this.app = express();
        this.puerto=process.env.PORT;
        this.middlewares();
        this.usuariospath='/api/usuarios';
        this.routes();
        
     }
    routes(){
         this.app.use(this.usuariospath, require('../routes/usuarios.js'));
    }

    middlewares() {

         this.app.use(cors());
         this.app.use(express.static('public'));
         this.app.use(express.json());

    }
    listen(){

        this.app.listen(this.puerto, () => {

            console.log('Server corriendo en Puerto ',this.puerto);
        
        })

    }
}

module.exports=Server;