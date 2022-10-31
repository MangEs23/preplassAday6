function rating(input) {
  if (input >= 21) {
    console.log("DEWASA");
  } else if (input >= 13) {
    console.log("REMAJA");
  } else if (input >= 9) {
    console.log("BIMBINGAN ORANG TUA");
  } else if (input < 9) {
    console.log("SEMUA USIA");
  }
}

rating(34);
