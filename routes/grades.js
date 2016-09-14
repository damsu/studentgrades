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
    })

    .delete(function (req, res, next) {
        res.send("delete grade");
    });

module.exports = router;