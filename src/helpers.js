const hbs = require('hbs');
const funciones = require('./funciones');


hbs.registerHelper('registrarUsuario',(documento, nombre, correo,telefono) =>{
    return funciones.registrarUsuario(documento, nombre, correo,telefono)
})
