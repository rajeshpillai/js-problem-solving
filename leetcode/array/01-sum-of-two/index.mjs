// import assert module using ES6 imports from node.js
// import { AssertionError, strict as assert } from 'assert';


/*
1. Two Sum
Easy
48.4K
1.6K
Companies
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

const log = console.log;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          if(nums[i] + nums[j] === target) {
              return [i, j];
          }
      }
  }
  
};

var twoSumOptimized = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

}

console.log("O(n)^2 solution...")
console.log(twoSum([2,1,5,3], 4)); // [1,3]
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3,2,4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]

console.log("Optimized solution...")
console.log(twoSumOptimized([2,1,5,3], 4)); // [1,3]
console.log(twoSumOptimized([2,7,11,15], 9)); // [0,1]
console.log(twoSumOptimized([3,2,4], 6)); // [1,2]
console.log(twoSumOptimized([3,3], 6)); // [0,1]

//assert.deepEqual(twoSum([2,1,5,3], 4), [1,3]);
