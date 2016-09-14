// Define some student data
var studentData = [{
                    id: 0,
                    name: "JSon Derulo",
                    address: "21 Jump Street",
                    group: "DIN22SP"
},
                {
                    id: 1,
                    name: "John Bon Java",
                    address: "22 Jump Street",
                    group: "DIN23SN"
                }];

// Define some course data
var courseData = [{
                    id: 0,
                    name: "Java For Noobs",
                    description: "You'all need to learn some Java yo, this course will help yo"
},
                {
                    id: 1,
                    name: "GoT History",
                    description: "Join to learn all about the god of tits and wine."
                }];

// Define some grade data
var gradeData = [{
                    id: 0,
                    studentId: 1,
                    courseId: 1,
                    grade: 2
},
                {
                    id: 1,
                    studentId: 1,
                    courseId: 2,
                    grade: 5
                },
                {
                    id: 2,
                    studentId: 2,
                    courseId: 1,
                    grade: 4
                },
                {
                    id: 3,
                    studentId: 2,
                    courseId: 2,
                    grade: 3
                }];           

// Function for calculating the next best ID for an array

newIdFor = function (array) {
    highestvalue = 0;
    array.forEach(function (array, index) {
        if (array.id > highestvalue) {
            highestvalue = array.id;
        }
    });
    var newID = highestvalue + 1;
    return newID;
}

// Public functions for other modules to use

///////////////////////////////////////////////////////////////////////////////////////////
//Students
///////////////////////////////////////////////////////////////////////////////////////////

exports.getAllStudents = function () {
    return studentData;
}
//-----------------------------------------------------------------------------------------
exports.getStudentById = function (id) {
    return studentData.filter(function (student) {
        if (student.id == id) {
            return student;
        }
    });
}
//-----------------------------------------------------------------------------------------
exports.addStudent = function (student) {
    var studentid = { "id": newIdFor(studentData) };
    var newstudent = {};
    //merging with student Id and student object from Postman
    for (var key in studentid) newstudent[key] = studentid[key];
    for (var key in student) newstudent[key] = student[key];
    //adding new student
    studentData.push(newstudent);
}
//-----------------------------------------------------------------------------------------
exports.removeStudentById = function (id) {
    //location of object in array
    var obj_position = null;
    studentData.forEach(function (student, index) {
        if (student.id == id) {
            obj_position = index;
        }
    });
    //removing of object
    studentData.splice(obj_position, 1);
}
//-----------------------------------------------------------------------------------------
exports.updateStudentById = function (id, newcontent) {
    //values that are not updatable
    var autofill = { "id": id };
    //final object
    var newstudent = {};
    //merging with id and newcontent from Postman
    for (var key in autofill) newstudent[key] = autofill[key];
    for (var key in newcontent) newstudent[key] = newcontent[key];
    //location of object in array
    var obj_position = null;
    studentData.forEach(function (student, index) {
        if (student.id == id) {
            obj_position = index;
        }
    });
    //replacement of object
    studentData.splice(obj_position, 1, newstudent);
}
///////////////////////////////////////////////////////////////////////////////////////////
//Courses
///////////////////////////////////////////////////////////////////////////////////////////

exports.getAllCourses = function () {
    return courseData;
}
//-----------------------------------------------------------------------------------------
exports.getCourseById = function (id) {
    return courseData.filter(function (course) {
        if (course.studentId == id) {
            return course;
        }
    });
}
//-----------------------------------------------------------------------------------------
exports.addCourse = function (course) {
    var courseid = { "id": newIdFor(courseData) };
    var newcourse = {};
    //merging with course Id and course object from Postman
    for (var key in courseid) newcourse[key] = courseid[key];
    for (var key in course) newcourse[key] = course[key];
    //adding new course
    courseData.push(newcourse);
}
//-----------------------------------------------------------------------------------------
exports.removeCourseById = function (id) {
    //location of object in array
    var obj_position = null;
    courseData.forEach(function (course, index) {
        if (course.id == id) {
            obj_position = index;
        }
    });
    //removing of object
    courseData.splice(obj_position, 1);
}
//-----------------------------------------------------------------------------------------
exports.updateCourseById = function (id, newcontent) {
    //values that are not updatable
    var autofill = { "id": id };
    //final object
    var newcourse = {};
    //merging with id and newcontent from Postman
    for (var key in autofill) newcourse[key] = autofill[key];
    for (var key in newcontent) newcourse[key] = newcontent[key];
    //location of object in array
    var obj_position = null;
    courseData.forEach(function (course, index) {
        if (course.id == id) {
            obj_position = index;
        }
    });
    //replacement of object
    courseData.splice(obj_position, 1, newcourse);
}
///////////////////////////////////////////////////////////////////////////////////////////
//Grades
///////////////////////////////////////////////////////////////////////////////////////////

exports.getAllGradesByStudentId = function (id) {
    return gradeData.filter(function (grade) {
        if (grade.studentId == id) {
            return grade;
        }
    });
}
//-----------------------------------------------------------------------------------------
exports.getGradeByGradeId = function (userid, gradeid) {
        return gradeData.filter(function (grade) {
            if (grade.studentId == userid && grade.id == gradeid) {
                return grade;
            }
        });
}
//-----------------------------------------------------------------------------------------
exports.removeGradeById = function (id) {
    //location of object in array
    var obj_position = null;
    gradeData.forEach(function (grade, index) {
        if (grade.id == id) {
            obj_position = index;
        }
    });
    //removing of object
    gradeData.splice(obj_position, 1);
}
//-----------------------------------------------------------------------------------------
exports.addGrade = function (id, grade) {
    //values that are not updatable
    var autofill = { "id": newIdFor(gradeData), "studentId": id };
    //final object
    var newgrade = {};
    //merging with courseId and grade from Postman
    for (var key in autofill) newgrade[key] = autofill[key];
    for (var key in grade) newgrade[key] = grade[key];
    //adding new object
    gradeData.push(newgrade);
}
//-----------------------------------------------------------------------------------------
exports.updateGradeById = function (userid, gradeid, grade) {
    //values that are not updatable
    var autofill = { "id": gradeid, "studentId": userid };
    //final object
    var newgrade = {};
    //merging with courseId and grade from Postman
    for (var key in autofill) newgrade[key] = autofill[key];
    for (var key in grade) newgrade[key] = grade[key];
    //location of object in array
    var obj_position = null;
    gradeData.forEach(function (grade, index) {
        if (grade.id == gradeid) {
            obj_position = index;
        }
    });
    //replacement of object
    gradeData.splice(obj_position, 1, newgrade);
}