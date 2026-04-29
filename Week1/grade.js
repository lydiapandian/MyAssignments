function calculateGrade(score) {

  let grade;

  switch (true) {
    case (score >= 90 && score <= 100):
      grade = "A";
      break;
    case (score >= 80 && score < 90):
      grade = "B";
      break;
    case (score >= 70 && score < 80):
      grade = "C";
      break;
    case (score >= 60 && score < 70):
      grade = "D";
      break;
    case (score >= 40 && score < 50):
      grade = "E";
      break;
    default:
      grade = "Invalid Score";
      break;
  }

  return grade;
}
console.log("Score 99 Grade: " + calculateGrade(95));   
console.log("Score 80 Grade: " + calculateGrade(83));   
console.log("Score 70 Grade: " + calculateGrade(74));   
console.log("Score 60 Grade: " + calculateGrade(65));   
console.log("Score 40 Grade: " + calculateGrade(45));   
console.log("Score 0 Grade: " + calculateGrade(105)); 