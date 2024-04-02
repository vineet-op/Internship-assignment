/*
 * TreeSet is an implementation of the SortedSet interface.
* It stores elements in sorted order. Elements are sorted based on their natural ordering or using a comparator provided at set creation time.
* Like other set implementations, it does not allow duplicate elements.
 */

import java.util.Set;
import java.util.TreeSet;

public class TreeSetExample {
    public static void main(String[] args) {
        Set<String> treeSet = new TreeSet<>();
        treeSet.add("V");
        treeSet.add("I");
        treeSet.add("N");
        treeSet.add("E");
        treeSet.add("E"); // Duplicate element
        treeSet.add("T");
        System.out.println("TreeSet: " + treeSet);
    }
}
