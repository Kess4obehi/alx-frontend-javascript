"use strict";
exports.__esModule = true;
exports.printTeacher = void 0;
var printTeacher = function (teacher) {
    return "".concat(teacher.firstName, ". ").concat(teacher.lastName);
};
exports.printTeacher = printTeacher;
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
