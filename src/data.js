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


//var gradeData = [{
//                    id: 1,
//                    studentId: 1,
//                    courseId: 1,
//                    grade: 2
//},
//                {
//                    id: 2,
//                    studentId: 1,
//                    courseId: 2,
//                    grade: 5
//                },
//                {
//                    id: 3,
//                    studentId: 2,
//                    courseId: 1,
//                    grade: 4
//                },
//                {
//                    id: 4,
//                    studentId: 2,
//                    courseId: 2,
//                    grade: 3
//                }];




// Define some book data
//var bookData = [{
//                    id: 22,
//                    name: "test book 1",
//                    author: 25
//                },
//                {
//                    id: 45,
//                    name: "test book 2",
//                    author: 445
//                }];


//// Define some author data
//var authorData = [
//    {
//        id: 25,
//        name: "John Doe"
//    },
//    {
//        id: 45,
//        name: "Max Tester"
//    }
//];                


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
    studentData.splice(obj_position, 1);
    studentData.splice(obj_position, 0, newcontent);
}

//Courses
exports.getAllCourses = function () {
    return courseData;
}

exports.getCourseById = function (id) {
    return courseData.filter(function (course) {
        if (course.id == id) {
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
    courseData.splice(obj_position, 1);
    courseData.splice(obj_position, 0, newcontent);
}



//Grades
//exports.getAllGradesByStudentId = function (id) {

//    //var gradeData = [];
//    //var iteration = 0;
//    //for (var i = 0; i < studentData.length; i++) {
//    //    for (var j = 0; j < courseData.length; j++) {

//    //        gradeData.push({
//    //            id: iteration,
//    //            student_ID: studentData[i].id,
//    //            course_ID: courseData[j].id,
//    //            grade: 0
//    //        });
//    //        iteration++;

//    //    }
//    //}
//    return gradeData.filter(function (grade) {
//        if (grade.studentId == id) {
//            return grade;
//        }
//    });
//}

////exports.getGradeById = function (id) {
////    return gradeData.filter(function (grade) {
////        if (grade.id == id) {
////            return grade;
////        }
////    });
////}

//exports.addGrade = function (grade) {
//    gradeData.push(grade);
//}

// Public functions for other modules to use
//exports.getAllBooks = function() 
//{
//    return bookData;
//}

//exports.getBookById = function(id)
//{
//    return bookData.filter(function(book){
//        if(book.id == id)
//        {
//            return book;
//        }
//    });
//}

//exports.addBook = function(book)
//{
//    bookData.push(book);
//}

//exports.getAuthors = function()
//{
//    return authorData;
//}