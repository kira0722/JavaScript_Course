//EXERCISE: PASSING GRADE AVERAGE

const grade = [12, 32, 43, 54, 66, 88, 99]

const passingGrades = grade.filter(grade => grade >= 70)

const averagePassingGrade = passingGrades.reduce((sum, grades) => sum + grades, 0) / grade.length

console.log('Original grades',grade);
console.log('passing grade',passingGrades);
console.log('average passing grade',averagePassingGrade);