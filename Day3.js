// 1. Rotate Array
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;

  reverse(nums, 0, n - 1); 
  reverse(nums, 0, k - 1); 
  reverse(nums, k, n - 1); 
}

function reverse(arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++;
    right--;
  }
}

// 2. Move Zeros
function moveZero(nums){
    let insertPos = 0;
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        nums[insertPos] = nums[i];
        insertPos++;
    }
    }

    for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
    }
}