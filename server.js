var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Producto = require("./models/Producto").Producto;
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 9988;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//mongoose.connect("mongodb://admin:13miguel13@ds155684.mlab.com:55684/heroku_zz3wrjgz").catch;

// set the home page route
app.get('/', function(req, res) {
	res.render('pages/index');
});

app.get('/ofertas', function(req, res) {
	res.render('pages/ofertas');
});


app.get('/data', function(require, response) {

	var json = {"Nombre":"NombrePersona1","Apellido":"ApellidoPersona1"};
    response.header({"Content-Type":"application/json"});
    response.write(JSON.stringify(json));
    response.end();
	
});

app.get("/RegistrarProducto",function(request,response){
    var NuevoProducto = new Producto({
        Nombre:"producto1",
        CatalogoSub:1,
        Estado:2,
        Descripcion:"1",
        Inventario:"2",
        Precio:9,
        FechaCreacion:Date.now()
    });

    NuevoProducto.save(function(err){
        if(err){
            console.log(String(err));
        }
        
    });
    response.send("Recibimos tus datos");
});


app.listen(6565);