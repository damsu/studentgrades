// Define some student data
var studentData = [{
                    id: 1,
                    name: "JSon Derulo",
                    address: "21 Jump Street",
                    group: "DIN22SP"
},
                {
                    id: 2,
                    name: "John Bon Java",
                    address: "22 Jump Street",
                    group: "DIN23SN"
                }];

// Define some course data
var courseData = [{
                    id: 1,
                    name: "Java For Noobs",
                    description: "You'all need to learn some Java yo, this course will help yo"
},
                {
                    id: 2,
                    name: "GoT History",
                    description: "Join to learn all about the god of tits and wine."
                }];


var gradeData = [{
                    id: 1,
                    studentId: 1,
                    courseId: 1,
                    grade: 2
},
                {
                    id: 2,
                    studentId: 1,
                    courseId: 2,
                    grade: 5
                },
                {
                    id: 3,
                    studentId: 2,
                    courseId: 1,
                    grade: 4
                },
                {
                    id: 4,
                    studentId: 2,
                    courseId: 2,
                    grade: 3
                }];           


// Public functions for other modules to use


//Students
exports.getAllStudents = function () {
    return studentData;
}

exports.getStudentById = function (id) {
    return studentData.filter(function (student) {
        if (student.id == id) {
            return student;
        }
    });
}

exports.addStudent = function (student) {
    studentData.push(student);
}

exports.removeStudentById = function (id) {
    var obj_position = null;
    studentData.forEach(function (student, index) {
        if (student.id == id) {
            obj_position = index;
        }
    });
    studentData.splice(obj_position, 1);
}

exports.updateStudentById = function (id, newcontent) {
    var obj_position = null;
    studentData.forEach(function (student, index) {
        if (student.id == id) {
            obj_position = index;
        }
    });
    //studentData.splice(obj_position, 1);
    studentData.splice(obj_position, 1, newcontent);
}

//Courses
exports.getAllCourses = function () {
    return courseData;
}

exports.getCourseById = function (id) {
    return courseData.filter(function (course) {
        if (course.studentId == id) {
            return course;
        }
    });
}

exports.addCourse = function (course) {
    courseData.push(course);
}


exports.removeCourseById = function (id) {
    var obj_position = null;
    courseData.forEach(function (course, index) {
        if (course.id == id) {
            obj_position = index;
        }
    });
    courseData.splice(obj_position, 1);
}

exports.updateCourseById = function (id, newcontent) {
    var obj_position = null;
    courseData.forEach(function (course, index) {
        if (course.id == id) {
            obj_position = index;
        }
    });
    //courseData.splice(obj_position, 1);
    courseData.splice(obj_position, 1, newcontent);
}



//Grades
exports.getAllGradesByStudentId = function (id) {
    //return gradeData.filter(function (grade) {
    //    if (grade.id == id) {
    //        return grade;
    //    }
    //});
    gradeData.forEach(function (grade) {
        if (grade.studentId == id) {
            return grade;
        }
    });
    //return gradeData;
}