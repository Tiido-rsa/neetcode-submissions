class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        var tempNums: number[] = [];

        for(let i = 0; i < nums.length; i ++){
            if(tempNums.includes(nums[i])){
                return true;
            }
            if(!tempNums.includes(nums[i])){
                tempNums.push(nums[i])
            }
            
        }


        return false;
    }
}
