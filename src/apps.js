const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser')
require('./helpers'); //Llamado al helper para saber donde esta ubicado el helper

const directoriopublico = path.join(__dirname, '../public')
const directoriopartials = path.join(__dirname, '../partials')
app.use(express.static(directoriopublico));
app.use(bodyParser.urlencoded({ extended: false }))
hbs.registerPartials(directoriopartials);

app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('index', {
    });
});

app.post('/rol', (req, res) => {
    rol = req.body.roles
    switch (req.body.roles){
        case 'coordinador':
        res.render('coordinador',{
            rol
        })
        break
        
        case 'aspirante':
        res.render('aspirante',{
            rol
        })
        break
    }
})


app.post('/registrarusuario', (req, res) => {
    res.render('registrarusuario', {
        documento: parseInt(req.body.documento),
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono
    })
})

app.post('/registrarcurso', (req, res) => {
    res.render('registrarcurso', {
        nombrecurso: req.body.nomcurso,
        idcurso: parseInt(req.body.idcurso),
        descripcion: req.body.descripcion,
        valor: parseInt(req.body.valor),
        modalidad: req.body.modalidad,
        intensidad: req.body.intensidad
    })
})

app.post('/registrarusuarioacurso', (req, res) => {
    res.render('registrarusuarioacurso', {
        documento: parseInt(req.body.documento),
        nombre: req.body.nombre,
        correo: req.body.correo,
        curso: req.body.curso,
    })
})

app.post('/eliminarmatriculado',(req,res) =>{
    res.render('eliminarmatriculado',{
        value: req.body.boton
    })
    res.redirect(req.get('referer'));
});

app.post('/cambiarrol',(req,res) =>{
    res.render('cambiarrol',{
        value: req.body.boton
    })
    res.redirect(req.get('referer'));
});


app.get('/mostrarcursos',(req,res) =>{
    res.render('mostrarcursos',{
    })
});

app.get('/mostrarinscritos',(req,res) =>{
    res.render('mostrarinscritos',{
    })
});

app.get('/mostrarusuarios',(req,res) =>{
    res.render('mostrarusuarios',{
    })
});

app.get('/crearcurso',(req,res) =>{
    res.render('formcreacioncurso',{
    })
});

app.get('/forminscripcionacurso',(req,res) =>{
    res.render('forminscribirseacurso',{
    })
});

app.post('/formregistrousuario', (req, res) => {
    res.render('formregistrousuario', {
    })
});

app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
});