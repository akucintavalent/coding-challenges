// link to the challenge: https://leetcode.com/problems/remove-element/submissions/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            n++;
        } else {
            nums[i - n] = nums[i];
        }
    }
    return nums.length - n
};
