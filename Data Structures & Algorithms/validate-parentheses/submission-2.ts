class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const parentheses = {
            ']' : '[',
            ')' : '(',
            '}' : '{'
        }
        
        let memory: string[] = [];

        for(var char of s){
            if(s.length <= 1){
                return false
            }
            else if(char === '(' || char == '[' || char === '{'){
                memory.push(char)
            }else if(parentheses[char] === (memory[memory.length - 1])){
                memory.pop();
            }else{
                return false;
            }
        }

        if(memory.length === 0){
            return true;
        }else{
            return false
        }
    }
}
