function hasTargetSum(array, target) {
  // Write your algorithm here
  const numSet = new Set();

  for (const num of array) {
    const diff = target - num;
    if (numSet.has(diff)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  Function hasTargetSum(array, target):
     Initialize an empty set called `numSet`.
     Iterate through each element `num` in the `array`:
       Calculate the difference `diff` between the `target` and `num`.
       If `diff` is in the `numSet`, return `true` as we found a pair that sums to the `target`.
       Otherwise, add `num` to the `numSet`.
  If the loop completes without finding a pair, return `false` as there's no such pair.

Time Complexity: O(n)
Space Complexity: O(n)
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
