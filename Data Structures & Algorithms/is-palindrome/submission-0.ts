class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

            let noSpaces = s.replace(/[^a-zA-Z0-9]/g
, "").toLowerCase();

            let leftIndex = 0;
            let rightIndex = noSpaces.length - 1;

            if(noSpaces[0] != noSpaces[noSpaces.length - 1]){
                    return false
                }

            while(leftIndex < rightIndex){
                
                if(noSpaces[leftIndex] != noSpaces[rightIndex]){
                    return false
                }else{
                    leftIndex += 1;
                    rightIndex -= 1;
                }
            }
        return true;
    }
}
