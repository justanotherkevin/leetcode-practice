// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function(nums, target) {
    let i = 0, list = {};
    while (i < nums.length ) {
        diff = target - nums[i];
        if (diff in list) {
            return [list[diff], i]
        }
        list[nums[i]] = i
        i++
    }
};

//at 96%
/*
with one pass and hash table
hash table example
nums = [2, 7, 11, 15], target = 9,
{7:0, 2:1, -2:2, -6:3}

create hash table as it pass through the array, if difference is found from hash table, return index 
*/
