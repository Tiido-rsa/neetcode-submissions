class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // assumed imput = ["neet","code"]
    encode(strs: string[]): string {
        //Self written
        let encoded: string = '';
        for(var strng of strs){
            let stringLength = strng.length;

            encoded += `${stringLength}#${strng}`;
        }

        return encoded;
        //assumed output = "4#neet4#code"
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    // assumed input = "4#neet4#code"
    decode(str: string): string[] {
        // AI generated
        let result:string[]= [];
        let i = 0;

        while(i < str.length){
            let j = str.indexOf('#', i);

            let lengthStr = str.substring(i,j);
            let length = parseInt(lengthStr);

            let wordStart = j + 1;
            let wordEnd = wordStart + length;
            let word = str.substring(wordStart, wordEnd);

            result.push(word);

            i = wordEnd;
        }

        return result;
        //expected output = ["neet", "code"]
    }
}
