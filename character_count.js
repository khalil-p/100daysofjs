function char_count(args1, matchChar) {
  // let count = 0;
  //   args1.split("").map((i) => {
  //     if (i.charCodeAt(0) === matchChar.charCodeAt(0)) {
  //       count++;
  //     }
  //   });
  totalcount = args1.split("").reduce((agg, curr) => {
    if (curr.charCodeAt(0) === matchChar.charCodeAt(0)) {
      agg++;
    }
    return agg
  }, 0);
  return totalcount;
}

console.log(char_count("missicIpi", "i"));
