class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let lowNum: number = prices[0];
        let maxProf: number = 0;
        let temp: number = 0;

        for(var i = 0; i < prices.length ; i++){
            temp = prices[i];

            if(lowNum > temp){
                lowNum = temp;
                let prof = temp - lowNum;
                if(prof > maxProf){
                    maxProf = prof;
                }
            }else{
                // lowNum = temp;
                let prof = temp - lowNum;
                if(prof > maxProf){
                    maxProf = prof;
                }
            }
        }

        return maxProf;
    }
}
