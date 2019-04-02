const fs = require('fs')
lista = [];

registrarUsuario = (...args) => {
	listar();
	let usuario = {
		documento: args[0],
		nombre: args[1],
		correo: args[2],
		telefono: args[3],
		tipo: 'aspirante'
	};
	let duplicado = lista.find(doc => doc.documento == args[0])
	if (!duplicado) {
		lista.push(usuario);
		guardar();
	}
	else {
		throw ('Ya existe otro usuario con ese documento ')
	}
}

registrarCurso = (...args) => {
	listar(tipo = 'cursos');
	let curso = {
		nombrecurso: args[0],
		idcurso: args[1],
		descripcion: args[2],
		valor: args[3],
		modalidad: args[4],
		intensidad: args[5],
		estado: 'disponible'
	};
	let duplicado = lista.find(id => id.idcurso == args[1])
	if (!duplicado) {
		lista.push(curso);
		guardar(tipo = 'cursos');
	}
	else {
		throw ('Ya existe otro curso con ese id ')
	}
}

registrarUsuarioAcurso = (...args) => {
	listar(tipo = 'usuario');
	listausuario = lista.slice()
	listar(tipo = 'matriculados')
	listamatriculados = lista.slice()
	let curso = {
		documento: args[0],
		nombre: args[1],
		correo: args[2],
		telefono: args[3],
		curso: args[4],
	};
	busqueda = doc => doc.documento === args[0]
	let existeusuario = listausuario.find(busqueda)
	let estainscrito = listamatriculados.find(buscar => (buscar.documento === args[0] && buscar.curso === args[4]))
	if (existeusuario) {
		if (!estainscrito) {
			lista.push(curso);
			guardar(tipo = 'matriculados');
		}
		else {
			throw ('Ya esta inscrito en el curso')
		}
	}
	else {
		throw ('Debe registrarse previamente como usuario para inscribirse al curso')
	}
}


const listar = (tipo = 'usuario') => {
	try {
		if (tipo === 'cursos') {
			lista = require('../listadecursos.json')
		}
		else if (tipo === 'matriculados') {
			lista = require('../listadematriculados.json')
		}
		else {
			lista = require('../listadousuarios.json');
		}
		//listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
	}
	catch (error) {
		lista = []
	}
}

const guardar = (tipo = 'usuario') => {
	let datos = JSON.stringify(lista);
	if (tipo === 'cursos') {
		nombreJson = 'listadecursos.json'
	}
	else if (tipo === 'matriculados') {
		nombreJson = 'listadematriculados.json'
	} else {
		nombreJson = 'listadousuarios.json'
	}
	fs.writeFile(nombreJson, datos, (err) => {
		if (err) throw (err);
		console.log('Archivo creado con éxito');
	})
}

const mostrarCursos = () => {
	listar(tipo = 'cursos');
	return lista
}

const mostrarCursosPorUsuario = (documento) => {
	listar(tipo = 'matriculados');
    let cursosaspirante = lista.filter(buscar => buscar.documento == parseInt(documento))
	return cursosaspirante
}


const mostrarCursosDisponibles = () => {
	listar(tipo = 'cursos');
	let est = lista.filter(cursos => cursos.estado === 'disponible')
	return est
}

const mostrarInscritos = () => {
	listar(tipo = 'matriculados');
	return lista
}

const mostrarUsuarios = () => {
	listar();
	return lista
}

const actualizar = (nom, asignatura, calificacion) => {
	listar()
	let encontrado = lista.find(buscar => buscar.nombre == nom)
	if (!encontrado) {
		console.log('Estudiante no existe')
	}
	else {
		encontrado[asignatura] = calificacion;
		guardar()
	}
}

const cambiarRol = (valor) => {
	listar();
	datosusuario = valor.split("+")
	let indice = lista.find(buscar => (buscar.documento == parseInt(datosusuario[0]) && buscar.tipo == datosusuario[1]));
	if (!indice) {
		console.log('Estudiante no existe')
	}
	else {
		if (indice.tipo == 'aspirante') {
			indice['tipo'] = 'docente';
		}
		else {
			indice['tipo'] = 'aspirante';
		}
		guardar()
	}
}

const eliminarMatriculado = (valor) => {
	listar(tipo = 'matriculados');
	datosmatriculado = valor.split("+")
	let indice = lista.findIndex(buscar => (buscar.documento == parseInt(datosmatriculado[0]) && buscar.curso == datosmatriculado[1]));
	if (indice < 0) {
		return 'No existe el elemento';
	}
	else {
		lista.splice(indice, 1)
		guardar(tipo = 'matriculados');
		return 'Registro borrado';
	}
}

const vercurso = idcurso => {
	listar((tipo = 'cursos'))
	let curso = lista.find(id => id.idcurso == idcurso.data.root.idcurso)
	return curso
	}

module.exports = {
	registrarUsuario,
	registrarCurso,
	registrarUsuarioAcurso,
	mostrarCursos,
	mostrarUsuarios,
	cambiarRol,
	mostrarCursosDisponibles,
	mostrarInscritos,
	eliminarMatriculado,
	mostrarCursosPorUsuario,
	vercurso,
	actualizar,
}