function char_count(args1, matchChar) {
  let count = 0;
  //   args1.split("").map((i) => {
  //     if (i.charCodeAt(0) === matchChar.charCodeAt(0)) {
  //       count++;
  //     }
  //   });
  args1
    .split("")
    .reduce(
      (agg, curr) =>
        agg.charCodeAt(0) === matchChar.charCodeAt(0) ? count++ : count,
      ""
    );
  return count;
}

console.log(char_count("missicIpi", "M"));
