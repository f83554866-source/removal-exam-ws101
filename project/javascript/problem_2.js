const assert = require('node:assert'); // Do not touch this

/* * You'll earn points for each test your function passes. 
 * There are 15 tests total: 5 that you can see and work with, 
 * plus 10 hidden tests that I'll use to evaluate your final submission.
 */

function findTwoSum(nums, target) {
  // Object to store numbers we've seen and their indices: { number: index }
  const seenNumbers = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const neededComplement = target - currentNum;

    // If the complement exists in our object, we found the matching pair
    if (seenNumbers[neededComplement] !== undefined) {
      return [seenNumbers[neededComplement], i];
    }

    // Otherwise, record the current number and its index, then continue
    seenNumbers[currentNum] = i;
  }

  // Fallback return just in case, though the prompt guarantees a solution
  return [];
}

/* * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Ignore everything under this part as this is only to help you asses if what you built is accurate.
 * DO NOT MODIFY ANYTHING UNDER THIS COMMENT, ANY MODIFICATION COULD RESULT WITH THE INVALIDATION OF YOUR
 * SUBMISSION.
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

function runTest(id, nums, target, expected) {
  try {
    const result = findTwoSum(nums, target);
    assert.deepStrictEqual(result, expected);
    console.log(`Test ${id} Passed: [${nums}], target ${target} => [${result}]`);
  } catch (err) {
    console.error(`Test ${id} Failed: [${nums}], target ${target} | Expected [${expected}] but got [${findTwoSum(nums, target)}]`);
  }
}

console.log("Starting Two Sum Validation Tests...\n");

runTest(1, 9,);
runTest(2, 6,);
runTest(3, 6,);

runTest(4, 12,);
runTest(5, 90,);

console.log("\nTests Completed.");