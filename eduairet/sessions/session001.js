// 10/06/2022

const tests = {
    test1: {arr: [3,2,4], target: 6},
    test2: {arr: [2,7,11,15], target: 9},
    test3: {arr: [3,3], target: 6},
    test4: {arr: [3,2,3], target: 6},
}

let twoSumMap = function(nums, target) {
    return targetPassed = nums.map((num,i) => {
            for (let j=i; j<nums.length; j++) {
                if(nums[i] + nums[j] === target && j !== i){
                    return [i, j];
                }
            }
        }).filter(arr => arr !== undefined).flat(Infinity);
};

for (const test of Object.values(tests)) {
    console.log(twoSumMap(test.arr,test.target));
}
