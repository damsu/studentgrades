var data = require('../src/data');
var express = require('express');
var router = express.Router();

//
// implement functionality
//

function getAllStudents(req, res, next) {
    res.json(data.getAllStudents());
}

function postNewStudent(req, res, next) {
    // Post parameters are available through req.body
    // Notice that you really should do some validation before accepting the body
    data.addStudent(req.body);
    res.sendStatus(201);
}


//
// Declare routes
//

router.route('/students')
    .get(getAllStudents)
    .post(postNewStudent);

router.route('/students/:id')
    .get(function (req, res, next) {
        // the id parameter is available at req.params        
        res.json(data.getStudentById(req.params.id));
    })
    .delete(function (req, res, next) {
        res.json(data.removeStudentById(req.params.id));
        res.send("delete student");
    })
    .put(function (req, res, next) {
        res.json(data.updateStudentById(req.params.id, req.body));
        res.send("update student");
    });

module.exports = router;