const hbs = require('hbs');
const funciones = require('./funciones');


hbs.registerHelper('registrarUsuario',(documento, nombre, correo,telefono) =>{
    return funciones.registrarUsuario(documento, nombre, correo,telefono)
})

hbs.registerHelper('registrarCurso',(nombrecurso,idcurso,descripcion,valor,modalidad,intensidad) =>{
    return funciones.registrarCurso(nombrecurso,idcurso,descripcion,valor,modalidad,intensidad)
})

hbs.registerHelper('registrarUsuarioAcurso',(documento,nombre,correo,telefono,curso) =>{
    return funciones.registrarUsuarioAcurso(documento,nombre,correo,telefono,curso)
})

hbs.registerHelper('eliminarmatriculado',(value) =>{
    return funciones.eliminarMatriculado(value)
})

hbs.registerHelper('cambiarRol',(value) =>{
    return funciones.cambiarRol(value)
})

hbs.registerHelper('mostrarcursos',(items,options) =>{
    var out ='';
    items = funciones.mostrarCursos()
    for(var i=0, l=items.length; i<l; i++) {
        out = out + options.fn(items[i])
    }
    return out;
});

hbs.registerHelper('cursosdisponibles',(items,options) =>{
    var out = '';
    items = funciones.mostrarCursosDisponibles()
    for(var i=0, l=items.length; i<l; i++) {
        out = out + options.fn(items[i])
    }
    return out;
});

hbs.registerHelper('mostrarinscritos',(items,options) =>{
    var out = '';
    items = funciones.mostrarInscritos()
    for(var i=0, l=items.length; i<l; i++) {
        out = out + options.fn(items[i])
    }
    return out;
});

 hbs.registerHelper('desplegable', (items,options) => {
    var out = '';
    items = funciones.mostrarCursosPorUsuario(items)
    for(var i=0, l=items.length; i<l; i++) {
        out = out + options.fn(items[i])
    }
    return out;
});

hbs.registerHelper('mostrarusuarios',(items,options) =>{
    var out = '';
    items = funciones.mostrarUsuarios()
    for(var i=0, l=items.length; i<l; i++) {
        out = out + options.fn(items[i])
    }
    return out;
});

hbs.registerHelper('eliminarCurso',(value) => {
    return funciones.eliminarMatriculado(value)
})