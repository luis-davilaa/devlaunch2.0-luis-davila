/* 
Harvard University has realized that manually handling scholarship criteria is not efficient. They are now looking for a better way to evaluate the many student applications they receive.

The new system they're planning to implement will efficiently decide who qualifies for scholarships. Normally, students have to help in lab classes and pass four subjects, with their grades averaged to check eligibility.

The rules for eligibility are strict: students need to have an average grade of 9 or higher across all subjects, with no individual grade lower than 8, regardless of how they did as lab assistants. Alternatively, if their average grade is 8.5 or higher, they can still qualify if they got an "A" or "B" as a lab assistant. But if they got a "C" grade as a lab assistant, they won't qualify for the scholarship, even if their overall grades are good.
*/

const prompt = require("prompt-sync")()
const MIN_GRADE = 8
const GRADES_TO_EVAL = 4
const MIN_GRADE_AVERAGE = 8.5
const PASSING_GRADE_AVERAGE = 9
const PASS_LAB_GRADE1 = "a"
const PASS_LAB_GRADE2 = "b"
const FAILED_LAB_GRADE = "c"

function scholarshipVerification(grade1, grade2, grade3, grade4, labGrade) {
  
  if (labGrade === FAILED_LAB_GRADE) {
    return false
  }

  if (grade1 < MIN_GRADE || grade2 < MIN_GRADE || grade3 < MIN_GRADE || grade4 < MIN_GRADE) {
    return false
  } 
  
  const gradeAverage = (grade1 + grade2 + grade3 + grade4) / GRADES_TO_EVAL

  if (gradeAverage < MIN_GRADE_AVERAGE) {
    return false
  } else {
    if (gradeAverage < PASSING_GRADE_AVERAGE && !(labGrade === PASS_LAB_GRADE1 || labGrade === PASS_LAB_GRADE2)) {
      return false
    }
  }
  return true
}

function main() {

  const grade1 = parseFloat(prompt("Enter grade 1: "))
  const grade2 = parseFloat(prompt("Enter grade 2: "))
  const grade3 = parseFloat(prompt("Enter grade 3: "))
  const grade4 = parseFloat(prompt("Enter grade 4: "))
  const labGrade = prompt("Enter lab grade (A, B or C): ")

  const verificationPassed = scholarshipVerification(grade1, grade2, grade3, grade4, labGrade.toLowerCase())

  if (verificationPassed) {
    console.log("Scholarship approved")
  } else {
    console.log("Scholarship not approved")
  }
}

main()