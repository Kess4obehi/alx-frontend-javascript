"use strict";
exports.__esModule = true;
exports.printTeacher = void 0;
function printTeacher(teacher) {
    return "".concat(teacher.firstName[0], ". ").concat(teacher.lastName);
}
exports.printTeacher = printTeacher;
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
