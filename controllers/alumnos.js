//File: controllers/tvshows.js


//GET - Return all alumnos in the DB
exports.findAllAlumnos = function(req, res) {
  console.log('GET /alumnos');
  res.locals.connection.query('', function (error, results, fields) {

    });
};

//GET - Return alumno with specified ID
exports.findById = function(req, res) {
    var userId = req.params.id;
    console.log('GET /alumnos/' + req.params.id);
    res.locals.connection.query('' , function (error, results, fields) {

    });
};

//POST - Insert a new alumno in the DB
exports.addAlumno = function(req, res) {
	console.log('POST');
	console.log(req.body);
  /* Completa el codigo*/


};

//PUT - Update a register already exists
exports.updateTVShow = function(req, res) {

};

//DELETE - Delete a alumno with specified ID
exports.deleteTVShow = function(req, res) {

};
