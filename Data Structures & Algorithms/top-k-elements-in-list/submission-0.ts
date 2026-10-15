class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const values = new Map<number,number>();
        const result: number[] = [];

        for(let i = 0; i < nums.length; i++){
            values.set(nums[i], (values.get(nums[i]) || 0) + 1);
        }

        const sortedEntries = Array.from(values.entries()).sort((a, b) => b[1] - a[1]);

        for(let i = 0; i < k; i++){
            result.push(sortedEntries[i][0]);
        }

        return result;
    }
}