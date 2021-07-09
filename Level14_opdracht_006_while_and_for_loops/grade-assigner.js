function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}

for (let score = 60; score <= 100; score++) {
  console.log(`For scoring ${score} point, you get an ${assignGrade(score)}`)
}

// For scoring 60 point, you get an E
// For scoring 66 point, you get an D
// For scoring 71 point, you get an C
// For scoring 81 point, you get an B
// For scoring 91 point, you get an A


