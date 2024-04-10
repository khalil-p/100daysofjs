function maxNoArray(arr) {
    // return arr.sort((a,b) => a-b).pop();

    return Math.max(...arr)

//   return arr.sort().pop();

  // arr.reduce((agg,curr) => {},0)
  // return maxItem;
}

console.log(maxNoArray([-10, -5, -3, -2, -9, -15]));
