// function longestWord(arg1) {
//   let itemLength = 0;
//   let longestWord = "";
//   if (arg1.trim().length !== 0) {
//     arg1.split(" ").map((i) => {
//       if (itemLength < i.length) {
//         itemLength = i.length;
//         longestWord = i;
//       }
//     });
//     return longestWord;
//   } else {
//     return false;
//   }
// }

// using sort
// function longestWord(args1) {
//   if (args1.trim().length !== 0) {
//     return args1
//       .split(" ")
//       .sort((a, b) => a.length - b.length)
//       .at(-1);
//   } else {
//     return false;
//   }
// }

// using reduce
function longestWord(args1) {
  if (args1.trim().length === 0) {
    return false;
  }
  return args1
    .split(" ")
    .reduce(
      (agg, currentWord) =>
        agg.length > currentWord.length ? agg : currentWord,
      ""
    );
}

// console.log(longestWord(" The quick brown fox jumps over the lazy dog   "));
console.log(longestWord(""));

// sort method sorts the array based on unicode values
//if input string contains empty or contains white spaces it should return false value
//funtion should ignore leading and trailing white spaces of the longest word

// hints:
// check if there is any comparison function in String
