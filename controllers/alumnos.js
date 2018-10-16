//File: controllers/alumnos.js


//GET - Return all alumnos in the DB
exports.findAllAlumnos = function(req, res) {
  console.log('GET /alumnos');
  var sql = "";
  res.locals.connection.query(sql , function (error, results, fields) {

  });
};

//GET - Return alumno with specified ID
exports.findById = function(req, res) {
    var userId = req.params.id;
    console.log('GET /alumnos/' + req.params.id);
    //validaciones
    if(isNaN(userId)){
      res.json({"error:": "ID no válido", "message:": "Favor de verificar de que sea un ID válido"});
      return;
    }
    /* Completa el codigo*/
    var sql = "";
    res.locals.connection.query( sql , function (error, results, fields) {

    });
};

//POST - Insert a new alumno in the DB
exports.addAlumno = function(req, res) {
	console.log('POST');
	console.log(req.body);
  //validando campos
  if(req.body.name == null || req.body.edad == null || req.body.carrera == null){
    res.json({"error:": "Valores nulos", "message:": "Favor de verificar de que se esten mandando los datos correctos"});
    return;
  }
  /* Completa el codigo*/
  var sql = "";
  res.locals.connection.query(sql,[/*Parametros de consulta */], function (err, result) {

  });

};

//PUT - Update a register already exists
exports.updateAlumno = function(req, res) {
  var userId = req.params.id;
  console.log('PUT /alumnos/' + req.params.id);
  //validar id
  if(isNaN(userId)){
    res.json({"error:": "ID no válido", "message:": "Favor de verificar de que sea un ID válido"});
    return;
  }
  //validar que lleguen los campos a actualizar
  if(req.body.name == null || req.body.edad == null || req.body.carrera == null){
    res.json({"error:": "Valores nulos", "message:": "Favor de verificar de que se esten mandando los datos correctos"});
    return;
  }
  //si no hay errores, intentar actualizar registro
  /* Completa el codigo*/
  var sql = "";
  res.locals.connection.query(sql,[/*Parametros de consulta */], function (err, result) {

  });
};

//DELETE - Delete a TVShow with specified ID
exports.deleteAlumno = function(req, res) {
  var userId = req.params.id;
  console.log('DELETE /alumnos/' + req.params.id);
  //validar si es un ID válido
  if(isNaN(userId)){
    res.json({"error:": "ID no válido", "message:": "Favor de verificar de que sea un ID válido"});
    return;
  }
  //si no hay errores, intentar eliminar el registro
  /* Completa el codigo*/
  var sql = "";
  res.locals.connection.query(sql,[/*Parametros de consulta */], function (err, result) {

  });
};
