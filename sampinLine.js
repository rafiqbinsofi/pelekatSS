export function imageLink() {
  let result = [];
  let limit;
  for (let letter of ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"]) {
    switch (letter) {
      case "A":
        limit = 10;
        break;
      case "B":
        limit = 10;
        break;
      case "C":
        limit = 10;
        break;
      case "D":
        limit = 10;
        break;
      case "E":
        limit = 10;
        break;
      case "F":
        limit = 4;
        break;
      case "G":
        limit = 10;
        break;
      case "H":
        limit = 10;
        break;
      case "J":
        limit = 10;
        break;
      case "K":
        limit = 1;
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
