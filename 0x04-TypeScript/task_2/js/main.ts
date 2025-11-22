interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  // Check if salary is a number AND less than 500
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// ... (Your interfaces and classes are above here) ...

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Teacher | Director): string {
  // If the Security Guard (isDirector) says YES:
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  // If the Security Guard says NO, it must be the only other option (Teacher):
  return employee.workTeacherTasks();
}

// --- Specific Tests for executeWork ---

// Test 1: Salary 200 (Teacher)
console.log(executeWork(createEmployee(200)));

// Test 2: Salary 1000 (Director)
console.log(executeWork(createEmployee(1000)));

// The Exclusive List (String Literal Type)
type Subjects = 'Math' | 'History';
// The Teacher Function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return "Teaching Math";
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}
// Testing (To see the expected result)
// -----------------------------------------------------------
console.log(teachClass('Math'));
console.log(teachClass('History'));