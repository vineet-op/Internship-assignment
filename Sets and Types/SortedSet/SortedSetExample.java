import java.util.SortedSet;
import java.util.TreeSet;

public class SortedSetExample {
    public static void main(String[] args) {
        SortedSet<Integer> sortedSet = new TreeSet<>();
        sortedSet.add(3);
        sortedSet.add(1);
        sortedSet.add(2);
        sortedSet.add(4);

        System.out.println("SortedSet: " + sortedSet);

        // & Accessing the elements
        int check = 3;

        // Check if the above string exists in
        // the SortedSet or not
        System.out.println("Contains " + check + " " + sortedSet.contains(check));

        // Print the first element in
        // the SortedSet
        System.out.println("First Value " + sortedSet.first());

        // Print the last element in
        // the SortedSet
        System.out.println("Last Value " + sortedSet.last());

        // & removing elemts
        sortedSet.remove(1);

        System.out.println("After removing element " + sortedSet);
    }
}
