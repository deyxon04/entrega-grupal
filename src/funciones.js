const fs = require('fs')
lista = []

registrarUsuario = (...args) => {
  listar()
  let usuario = {
    documento: args[0],
    nombre: args[1],
    correo: args[2],
    telefono: args[3],
    tipo: 'aspirante'
  }
  let duplicado = lista.find(id => id.idcurso == args[1])
  if (!duplicado) {
    lista.push(usuario)
    guardar()
  } else {
    throw 'Ya existe otro usuario con ese documento '
  }
}

registrarCurso = (...args) => {
  listar((tipo = 'cursos'))
  let curso = {
    nombrecurso: args[0],
    idcurso: args[1],
    descripcion: args[2],
    valor: args[3],
    modalidad: args[4],
    intensidad: args[5],
    estado: 'disponible'
  }
  let duplicado = lista.find(id => id.idcurso == args[1])
  if (!duplicado) {
    lista.push(curso)
    guardar((tipo = 'cursos'))
  } else {
    throw 'Ya existe otro curso con ese id '
  }
}

vercuso = idcurso => {
  listar((tipo = 'cursos'))
  let curso = lista.find(id => id.idcurso == idcurso.data.root.idcurso)
  return curso
}

registrarUsuarioAcurso = (...args) => {
  listar((tipo = 'usuario'))
  listausuario = lista.slice()
  listar((tipo = 'usuarioporcurso'))
  listausuarioporcurso = lista.slice()
  let curso = {
    documento: args[0],
    nombre: args[1],
    correo: args[2],
    telefono: args[3],
    curso: args[4]
  }
  busqueda = doc => doc.documento === args[0]
  let existeusuario = listausuario.find(busqueda)
  let estainscrito = listausuarioporcurso.find(
    buscar => buscar.documento === args[0] && buscar.curso === args[4]
  )
  if (existeusuario) {
    if (!estainscrito) {
      lista.push(curso)
      guardar((tipo = 'usuarioporcurso'))
    } else {
      throw 'Ya esta inscrito en el curso'
    }
  } else {
    throw 'Debe registrarse previamente como usuario para inscribirse al curso'
  }
}

const listar = (tipo = 'usuario') => {
  try {
    if (tipo === 'cursos') {
      lista = require('../listadecursos.json')
    } else if (tipo === 'usuarioporcurso') {
      lista = require('../listadeusuariosporcurso.json')
    } else {
      lista = require('../listadousuarios.json')
    }
    // listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
  } catch (error) {
    lista = []
  }
}

const guardar = (tipo = 'usuario') => {
  let datos = JSON.stringify(lista)
  if (tipo === 'cursos') {
    nombreJson = 'listadecursos.json'
  } else if (tipo === 'usuarioporcurso') {
    nombreJson = 'listadeusuariosporcurso.json'
  } else {
    nombreJson = 'listadousuarios.json'
  }
  fs.writeFile(nombreJson, datos, err => {
    if (err) throw err
    console.log('Archivo creado con éxito')
  })
}

const mostrarCursos = () => {
  listar((tipo = 'cursos'))
  return lista
}

const mostrarCursosDisponibles = () => {
  listar((tipo = 'cursos'))
  let est = lista.filter(cursos => cursos.estado === 'disponible')
  return est
}

const actualizar = (nom, asignatura, calificacion) => {
  listar()
  let encontrado = lista.find(buscar => buscar.nombre == nom)
  if (!encontrado) {
    console.log('Estudiante no existe')
  } else {
    encontrado[asignatura] = calificacion
    guardar()
  }
}

const eliminar = nom => {
  listar()
  let nuevo = lista.filter(mat => mat.nombre != nom)
  if (nuevo.length == lista.length) {
    console.log('ningun estudiante tiene el nombre indicado')
  } else {
    lista = nuevo
    guardar()
  }
}

module.exports = {
  registrarUsuario,
  registrarCurso,
  registrarUsuarioAcurso,
  mostrarCursos,
  mostrarCursosDisponibles,
  actualizar,
  eliminar,
  vercuso
}
