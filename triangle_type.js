function triangle_type(a, b, c) {
  if (a === b && b === c) {
    return "equilateral";
  } else if (a === b || b === c || c === a) {
    return "isocelious";
  } else {
    return "scaline";
  }
}

console.log(triangle_type(1, 2, 3));
