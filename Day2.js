
// 1. Reverse String
let s = ["h","e","l","l","o"]

function  reverseString(s) {
    let start = 0
    let end = s.length - 1
    while(start < end){
        [s[start] , s[end]] = [s[end] , s[start]]
        start++
        end--
    }
    return s
}

console.log(reverseString(s))

// 2. Check if Array Is Sorted and Rotated

var check = function(nums) {
    let count = 0;
    let n = nums.length
    for (let i = 0; i < n; i++) {
        let next = nums[(i + 1) % n]
        if (nums[i] > next) {
            count++;
        }
    }
    return count <= 1;
}