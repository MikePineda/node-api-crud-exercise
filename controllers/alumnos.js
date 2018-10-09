//File: controllers/tvshows.js


//GET - Return all tvshows in the DB
exports.findAllAlumnos = function(req, res) {
  res.locals.connection.query('SELECT * FROM alumno', function (error, results, fields) {
    console.log(error);
      if(error){
        res.json({"status": 500, "error": error, "response": null});
        //If there is error, we send the error in the error section with 500 status
      } else {
        res.json({"status": 200, "error": null, "response": results});
        //If there is no error, all is good and response is 200OK.
      }
    });
};

//GET - Return alumno  with specified ID
exports.findById = function(req, res) {
    var userId = req.params.id;
    console.log('GET /tvshow/' + req.params.id);
    res.locals.connection.query('SELECT * FROM alumno WHERE id =' + userId, function (error, results, fields) {
      console.log(error);
        if(error){
          res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
          //If there is error, we send the error in the error section with 500 status
        } else {
          res.json({"status": 200, "error": null, "response": results});
          //If there is no error, all is good and response is 200OK.
        }
      });
};

//POST - Insert a new TVShow in the DB
exports.addAlumno = function(req, res) {
	console.log('POST');
	console.log(req.body);
  var sql = "INSERT INTO alumno (name, edad, carrera) VALUES ?";

  var values = [[req.body.name , req.body.edad , req.body.carrera]];
    res.locals.connection.query(sql,[values], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      res.json({"status": 200, "error": null,"message:": "1 registro insertado correctamente", "response": values});
    });

};

//PUT - Update a register already exists
exports.updateTVShow = function(req, res) {

};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function(req, res) {

};
