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

function printTeacher(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
const printTeacherFunc: printTeacherFunction = (firstName, lastName) => {
  return firstName + " " + lastName;
};

console.log(printTeacherFunc("John", "Doe")); // John Doe
