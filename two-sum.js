// Link to the challenge: https://leetcode.com/problems/two-sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let help = {};
    for (let i = 0; i < nums.length; i++) {
        if (help[target - nums[i]]) return [+help[target - nums[i]], i];
        help[nums[i]] = `${i}`;
    }
};
