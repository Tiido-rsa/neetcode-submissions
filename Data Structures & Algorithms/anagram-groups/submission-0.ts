class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        var anagramMap  = new Map<string, string[]>();

        for (const word of strs) {
        // 2. Sort the word alphabetically to create the unique "key"
        // Example: "cat" -> ['c', 'a', 't'] -> ['a', 'c', 't'] -> "act"
        const sortedKey = word.split('').sort().join('');

        // 3. If we haven't seen this sorted pattern yet, initialize an empty list for it
        if (!anagramMap.has(sortedKey)) {
            anagramMap.set(sortedKey, []);
        }

        // Add the original word to its matching anagram group
        anagramMap.get(sortedKey)!.push(word);
    }

    // 4. Return all the grouped sublists as a 2D array
    // Array.from(map.values()) extracts just the arrays from the map
    return Array.from(anagramMap.values());

        return [];
    }
}
