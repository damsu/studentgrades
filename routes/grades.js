var data = require('../src/data');
var express = require('express');
var router = express.Router();

//
// implement functionality
//

//
// Declare routes
//

router.route('/students/:userid/grades')
    .get(function (req, res, next) {
        // the id parameter is available at req.params        
        res.json(data.getAllGradesByStudentId(req.params.userid));
    });

router.route('/students/:userid/grades/:gradeid')
    .get(function (req, res, next) {
        // the id parameter is available at req.params        
        res.json(data.getGradeByGradeId(req.params.userid, req.params.gradeid));
    });

module.exports = router;