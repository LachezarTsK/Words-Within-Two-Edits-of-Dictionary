
#include <string>
#include <vector>
using namespace std;

class Solution {
    
public:
    vector<string> twoEditWords(const vector<string>& queries, const vector<string>& dictionary) const {
        size_t sizeForEachWord = dictionary[0].length();
        vector<string> wordsWithinTwoEdits;

        for (const auto& wordOne : queries) {
            for (const auto& wordTwo : dictionary) {
                if (wordsAreWithinTwoEdits(wordOne, wordTwo, sizeForEachWord)) {
                    wordsWithinTwoEdits.push_back(wordOne);
                    break;
                }
            }
        }
        return wordsWithinTwoEdits;
    }
    
private:
    //Alternatively, C++20: ...(string_view first, string_view second, ...)
    bool wordsAreWithinTwoEdits(const string& first, const string& second, size_t sizeForEachWord) const {
        int countEdits = 0;
        for (size_t i = 0; i < sizeForEachWord; ++i) {
            if (first[i] != second[i] && ++countEdits > 2) {
                return false;
            }
        }
        return true;
    }
};
