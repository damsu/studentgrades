var data = require('../src/data');
var express = require('express');
var router = express.Router();

//
// implement functionality
//

function getAllGrades(req, res, next) {
    res.json(data.getAllGrades());
}

function postNewGrade(req, res, next) {
    // Post parameters are available through req.body
    // Notice that you really should do some validation before accepting the body
    data.addGrade(req.body);
    res.sendStatus(201);
}

//
// Declare routes
//

router.route('/grades/:id')
    .get(function (req, res, next) {
        // the id parameter is available at req.params        
        res.json(data.getAllGradesByStudentId(req.params.id));
    })
    //.get(getAllGrades)
    .post(postNewGrade);

//router.route('/students/:id/grades/:id')
//    .get(function (req, res, next) {
//        // the id parameter is available at req.params        
//        res.json(data.getGradeById(req.params.id));
//    })
    .delete(function (req, res, next) {
        res.send("delete grade");
    });

module.exports = router;