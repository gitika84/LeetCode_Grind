// 1. Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
    let k = 0
    for(let i = 0; i < nums.length ; i++){
        let next = i + 1
        if(nums[i] !== nums[next]){
            nums[k] = nums[i]
            k++
        }
    }
    return k
}


// 2. Remove Element 

var removeElement = function(nums, val) {
    let k = 0
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== val){
            nums[k] = nums[i]
            k++
        }
    }
    return k
}

// second Approch - with returning a new array

function removeElement(nums, val) {
    let expectedArr = []
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== val){
            expectedArr.push(nums[i])
        }
    }
    console.log(expectedArr)
}

// removeElement([0,1,2,2,3,0,4,2] , 2)
