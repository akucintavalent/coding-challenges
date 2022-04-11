// link to the challenge: https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let el = nums[0];
    let n = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === el) n++;
        else {
            nums[i - n] = nums[i];
            el = nums[i];
        }
    }
    return nums.length - n;
};
