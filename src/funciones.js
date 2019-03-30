const fs = require ('fs')
listaUsuarios = [];

registrarUsuario = (...args) => {
	listar();
    let usuario = {
		documento:args[0],
		nombre: args[1],
		correo:args[2],
		telefono:args[3],
		tipo:'aspirante'
	};
	let duplicado = listaUsuarios.find(doc => doc.documento == args[0])
	if(!duplicado){
	listaUsuarios.push(usuario);
	guardar();
	}
	else{
		throw ('Ya existe otro usuario con ese documento ')
	}
}

const listar = () => {
	try{
		listaUsuarios = require('../listadousuarios.json');
		console.log('test:' + listaUsuarios)
	//listaEstudiantes = JSON.parse(fs.readFileSync('listado.json'));
	}
	catch(error){
		listaUsuarios = []
	}
}

const promedioEstudiante = (nom) =>{
	listar()
	let est = listaUsuarios.find(buscar => buscar.nombre == nom)
	if(!est){
	console.log('No existe el estudiante');
	}
	else{
		console.log('promedio del estudiante: ')
		console.log(promedio(est));
	}
} 

const estudiantesAprobaron = () =>{
	listar()
	console.log('nombre de los estudiantes que han ganado: ')
	listaUsuarios.forEach(estudiante => {
		let promedioestudiante = promedio(estudiante)
		if(promedioestudiante > 3){
			console.log('nombre ' + estudiante.nombre)
		}
});
}

const promedio = (est) =>{
	let promedio =  (est.matematicas + est.ingles + est.programacion)/3;
	return promedio
}

const guardar = () => {
	let datos = JSON.stringify(listaUsuarios);
	fs.writeFile('listadousuarios.json', datos, (err) => {
		if (err) throw (err);
		console.log('Archivo creado con éxito');
	})
}

const mostrar = () => {
	listar()
    console.log('notas de los estudiantes')
	listaUsuarios.forEach(estudiante => {
		console.log(estudiante.nombre);
		console.log('notas')
		console.log('matematicas' + estudiante.matematicas)
		console.log('ingles ' + estudiante.ingles)
		console.log('programacion '+ estudiante.programacion + '\n')
	});
}

const mostrarest = (nom) => {
	listar()
	let est = listaUsuarios.find(buscar => buscar.nombre == nom)
	if(!est){
	console.log('No existe el estudiante');
	}
	else{
		console.log(est);
		console.log('notas')
		console.log('matematicas' + est.matematicas)
		console.log('ingles ' + est.ingles)
		console.log('programacion '+ est.programacion + '\n')
	}
}

const mostrarmat = () =>{
	listar()
	let ganan = listaUsuarios.filter(mat => mat.matematicas >=3)
	if (ganan.length == 0){
		console.log('ningun estudiante va ganando')
	}
	else{
		ganan.forEach(estudiante => {
			console.log(estudiante.nombre);
			console.log('notas')
			console.log('matematicas ' + estudiante.matematicas)
		});
	}
} 

const actualizar = (nom, asignatura, calificacion) =>{
	listar()
	let encontrado = listaUsuarios.find(buscar => buscar.nombre == nom)
	if(!encontrado){
       console.log('Estudiante no existe')
	}
	else{
		encontrado[asignatura] = calificacion;
		guardar()
	}
}

const eliminar = (nom) => {
	listar()
	let nuevo = listaUsuarios.filter(mat => mat.nombre != nom)
	if (nuevo.length == listaUsuarios.length){
		console.log('ningun estudiante tiene el nombre indicado')
	}
	else{
		listaUsuarios = nuevo
		guardar()
	}
	
}

module.exports = {
	registrarUsuario,
	mostrar,
	mostrarest,
	mostrarmat,
	promedioEstudiante,
	estudiantesAprobaron,
	actualizar,
	eliminar
}