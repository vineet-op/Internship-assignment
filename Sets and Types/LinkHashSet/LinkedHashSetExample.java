/*
* LinkedHashSet is an implementation of the Set interface.
* It maintains the insertion order of elements. The order in which elements are inserted is preserved.
* Like HashSet, it does not allow duplicate elements.
 */

import java.util.LinkedHashSet;
import java.util.Set;

public class LinkedHashSetExample {
    public static void main(String[] args) {
        Set<String> linkedHashSet = new LinkedHashSet<>();
        linkedHashSet.add("Honda");
        linkedHashSet.add("BMW");
        linkedHashSet.add("Lamborghini");
        linkedHashSet.add("Audi");
        linkedHashSet.add("Ferrari");
        linkedHashSet.add("BMW");// Duplicate element
        System.out.println("LinkedHashSet: " + linkedHashSet);
    }
}
