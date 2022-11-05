
/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
    let sizeForEachWord = dictionary[0].length;
    const wordsWithinTwoEdits = [];

    for (let wordOne of queries) {
        for (let wordTwo of dictionary) {
            if (wordsAreWithinTwoEdits(wordOne, wordTwo, sizeForEachWord)) {
                wordsWithinTwoEdits.push(wordOne);
                break;
            }
        }
    }
    return wordsWithinTwoEdits;
};

/**
 * @param {string} first
 * @param {string} second
 * @param {string} sizeForEachWord 
 * @return {boolean}
 */
function wordsAreWithinTwoEdits(first, second, sizeForEachWord) {
    let countEdits = 0;
    for (let i = 0; i < sizeForEachWord; ++i) {
        if (first.charAt(i) !== second.charAt(i) && ++countEdits > 2) {
            return false;
        }
    }
    return true;
}
