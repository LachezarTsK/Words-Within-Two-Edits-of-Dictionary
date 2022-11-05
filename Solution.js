
/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {
    let sizeForeachWord = dictionary[0].length;
    const wordsWithinTwoEdits = [];

    for (let wordOne of queries) {
        for (let wordTwo of dictionary) {
            if (wordsAreWithinTwoEdits(wordOne, wordTwo, sizeForeachWord)) {
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
 * @param {string} sizeForeachWord 
 * @return {boolean}
 */
function wordsAreWithinTwoEdits(first, second, sizeForeachWord) {
    let countEdits = 0;
    for (let i = 0; i < sizeForeachWord; ++i) {
        if (first.charAt(i) !== second.charAt(i) && ++countEdits > 2) {
            return false;
        }
    }
    return true;
}
