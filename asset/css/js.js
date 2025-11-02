function grade(score) {
  return score >= 90 ? "A" :
         score >= 80 ? "B" :
         score >= 70 ? "C" :
         score >= 60 ? "D" : "F";
}

// Example usage
console.log(grade(95)); // A
console.log(grade(82)); // B
console.log(grade(73)); // C
console.log(grade(67)); // D
console.log(grade(50)); // F
