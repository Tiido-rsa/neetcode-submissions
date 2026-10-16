class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        let result : number[] = [];

        let left = 0;
        let right = numbers.length - 1;

        while(left < right){
            let sum = numbers[left] + numbers[right];
            if(target === sum){
                result.push(left+1, right+1);
                return result;
            }
            else if(sum < target){
                left += 1;
            }else{
                right -= 1;
            }
        }

        return result;
    }
}
