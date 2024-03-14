export function imageLink() {
  let result = [];
  let limit;
  // Change samping Line here
  for (let letter of ["A", "B"]) {
    // Change limit to represent the number of sampin in each line
    switch (letter) {
      case "A":
        limit = 10;
        break;
      case "B":
        limit = 10;
        break;
      default:
        limit = 10;
        break;
    }

    for (let number = 1; number <= limit; number++) {
      result.push(letter + number);
    }
  }
  return result;
}
