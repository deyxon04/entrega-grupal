const express = require('express')
const app = express()
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser')
require('./helpers'); //Llamado al helper para saber donde esta ubicado el helper
 
const directoriopublico = path.join(__dirname,'../public')
const directoriopartials = path.join(__dirname,'../partials')
app.use(express.static(directoriopublico));
app.use(bodyParser.urlencoded({extended:false}))
hbs.registerPartials(directoriopartials);

app.set('view engine', 'hbs');


app.get('/',(req, res) =>{
    res.render('formulario',{
    });
 });

 app.post('/registrar',(req,res) =>{
     res.render('registrar',{
         documento: parseInt(req.body.documento),
         nombre: req.body.nombre,
         correo: req.body.correo,
         telefono: req.body.telefono
     })
 })

 app.listen(3000, () =>{
	console.log('Escuchando en el puerto 3000')
});