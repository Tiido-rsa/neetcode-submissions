class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        var result: number[] = [];

        for(let i = 0; i < nums.length; i++){
            var net = target - nums[i];

            if(nums.includes(net) && nums.indexOf(net) !== i){
                result.push(i);
                result.push(nums.indexOf(net));
                return result.sort((a, b) => a - b);
            }
        }

        return result;
    }
}
