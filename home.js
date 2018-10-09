var mysql = require("mysql");
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser");
    app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();

//Database connection

app.use((req, res, next) => {
	res.locals.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'laravelclase'
	});
	res.locals.connection.connect();
	next();
  console.log("connected to the database");
});


var alumnos = express.Router();
var AlumnosCtrl = require('./controllers/alumnos');

alumnos.route('/alumnos')
  .get(AlumnosCtrl.findAllAlumnos)
  .post(AlumnosCtrl.addAlumno);

  alumnos.route('/alumnos/:id')
    .get(AlumnosCtrl.findById)
    .put(AlumnosCtrl.updateTVShow)
    .delete(AlumnosCtrl.deleteTVShow);



app.use('/api', alumnos);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
