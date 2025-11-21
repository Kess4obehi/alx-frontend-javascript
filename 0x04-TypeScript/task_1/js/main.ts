interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface TeacherName {
  firstName: string;
  lastName: string;
}

interface printTeacherFunction {
  (teacher: TeacherName): string;
}

const printTeacher: printTeacherFunction = (teacher) => {
  return `${teacher.firstName}. ${teacher.lastName}`;
};

export { printTeacher };

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));

