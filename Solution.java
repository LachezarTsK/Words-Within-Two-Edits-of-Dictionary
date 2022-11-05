
import java.util.ArrayList;
import java.util.List;

public class Solution {

    public List<String> twoEditWords(String[] queries, String[] dictionary) {
        int sizeForEachWord = dictionary[0].length();
        List<String> wordsWithinTwoEdits = new ArrayList<>();

        for (String wordOne : queries) {
            for (String wordTwo : dictionary) {
                if (wordsAreWithinTwoEdits(wordOne, wordTwo, sizeForEachWord)) {
                    wordsWithinTwoEdits.add(wordOne);
                    break;
                }
            }
        }
        return wordsWithinTwoEdits;
    }

    private boolean wordsAreWithinTwoEdits(String first, String second, int sizeForEachWord) {
        int countEdits = 0;
        for (int i = 0; i < sizeForEachWord; ++i) {
            if (first.charAt(i) != second.charAt(i) && ++countEdits > 2) {
                return false;
            }
        }
        return true;
    }
}
