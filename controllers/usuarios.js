const { response } = require('express');

const usuariosGet = (req, res= response ) => {
    //const query = req.query;
    const {q, nombre = 'noname', id} = req.query;
    res.json({
        msg:'get - API Controlador',
   //     query
   q, nombre, id
    })
  }

  const usuariosPut = (req, res = response) => {

    const {id} = req.params;
    //const id = req.params.id;
    res.json({
        msg:'put - API Controller',
        id
    })
  }

  const usuariosDelete = (req, res=response) => {
    res.json({
        msg:'delete - API Controller'
    })
  }

  const usuariosPost = (req, res=response) => {
   //  const body = req.body;
   const {nombre, edad} = req.body; 
   res.json({
        msg:'Post - API Controller',
    //    body
    nombre, edad
    })
  }

  module.exports={
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost
  }