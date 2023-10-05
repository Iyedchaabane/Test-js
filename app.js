function findLongestWordWithMostVowels(sentence) {
    
    const words = sentence.replace(/[^a-zA-Z\s]/g, '').split(/\s+/);
    
    let longestWord = '';
    let maxWordLength = 0;
    let maxVowelCount = 0;

    
    words.forEach(word => {
        const vowels = word.match(/[aeiou]/gi); 
        const vowelCount = vowels ? vowels.length : 0;

        if (word.length > maxWordLength || (word.length === maxWordLength && vowelCount > maxVowelCount)) {
            longestWord = word;
            maxWordLength = word.length;
            maxVowelCount = vowelCount;
        }
    });

    return longestWord;
}

const input = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";
const result = findLongestWordWithMostVowels(input);
console.log(result); 
