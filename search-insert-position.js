// link to the challange: https://leetcode.com/problems/search-insert-position/submissions/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target);
};

var binarySearch = function(nums, l, r, target) {
    if (l === r) {
        if (nums[l] === target) {
            return l;
        } else {
            if (target < nums[l]) {
                return l
            } else {
                return l + 1;
            }
        }
    }
    if (l === r - 1) {
        if (target <= nums[l]) {
            return l;
        } else if (target <= nums[r]) {
            return r;
        } else {
            return r + 1;
        }
    }
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
        return m;
    }
    if (target < nums[m]) {
        return binarySearch(nums, l, m - 1, target);
    } else {
        return binarySearch(nums, m + 1, r, target);
    }
};
