//declarando variables , equivalente a los import en java
var mysql = require("mysql");
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser");

//Con bodyParser permitimos que pueda parsear JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();

//Database connection
//app.use(middleware) is called every time a request is sent to the server.
app.use((req, res, next) => {
	res.locals.connection = mysql.createConnection({
		host     : '',
		user     : '',
		password : '',
		database : ''
	});
	res.locals.connection.connect();
	next();
  console.log("connected to the database");
});

//ruta de alumnos
var alumnos = express.Router();
//exportando módulo, controller de alumnos
var AlumnosCtrl = require('./controllers/alumnos');

  alumnos.route('/alumnos')
    .get()
    .post();

  alumnos.route('/alumnos/:id')
    .get()
    .put()
    .delete();



app.use('/api', alumnos);

//hacer que la app escuche cierto puerto, en este caso el 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
