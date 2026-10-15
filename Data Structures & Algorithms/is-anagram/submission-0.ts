class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        
        if(s.length != t.length){
            return false;
        }
        

        for(let i = 0; i < t.length; i++){
            if(s.includes(t[i])){
                s = s.replace(t[i], '');
            }
            
            if(s.length === 0){
                return true;
            }
        }
        return false;
    }
}
