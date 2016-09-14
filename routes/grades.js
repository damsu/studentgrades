var data = require('../src/data');
var express = require('express');
var router = express.Router();


//
// Declare routes
//

router.route('/students/:userid/grades')
    .get(function (req, res, next) {      
        res.json(data.getAllGradesByStudentId(req.params.userid));
    })

.post(function (req, res, next) {    
    res.json(data.addGrade(req.params.userid, req.body)); //testable by sending object with courseId and grade
    res.sendStatus(201);
});

router.route('/students/:userid/grades/:gradeid')
    .get(function (req, res, next) {       
        res.json(data.getGradeByGradeId(req.params.userid, req.params.gradeid));
    })

    .delete(function (req, res, next) {      
        res.json(data.removeGradeById(req.params.gradeid));
        res.send("delete grade");
    })

    .put(function (req, res, next) {
        res.json(data.updateGradeById(req.params.userid, req.params.gradeid, req.body)); //testable by sending object with courseId and grade
    res.send("update grade");
});

module.exports = router;