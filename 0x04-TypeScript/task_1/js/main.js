//Implement the function correctly
var printTeacher = function (teacher) {
    return "".concat(teacher.firstName[0], ". ").concat(teacher.lastName);
};
console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
console.log(printTeacher({ firstName: "Kess", lastName: "Obehi" }));
