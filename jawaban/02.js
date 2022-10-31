function grade(input) {
  if (input >= 90) {
    console.log("A");
  } else if (input >= 80 && input <= 89) {
    console.log("B");
  } else if (input >= 70 && input <= 79) {
    console.log("C");
  } else if (input >= 60 && input <= 69) {
    console.log("D");
  } else if (input <= 59) {
    console.log("E");
  }
}

grade(55);
