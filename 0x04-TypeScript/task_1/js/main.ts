interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

//Create the interface for the object accepted by the function
interface TeacherName {
  firstName: string;
  lastName: string;
}

//Create the interface for the function
interface printTeacherFunction {
  (teacher: TeacherName): string;
}

//Implement the function correctly
const printTeacher: printTeacherFunction = (teacher) => {
  return `${teacher.firstName[0]}. ${teacher.lastName}`;
};

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
