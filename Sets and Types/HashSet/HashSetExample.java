/*
 * HashSet is an implementation of the Set interface.
 * It does not allow duplicate elements. Adding duplicate elements will not
 * throw an exception, but they will not be stored.
 * It does not guarantee the order of elements. The order can change over time.
 * 
 */

import java.util.HashSet;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {

        Set<String> hashSet = new HashSet<>();
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Orange");
        hashSet.add("Banana"); // Duplicate element
        hashSet.add("Gauva");

        System.out.println("HashSet: " + hashSet);
    }
}
