import java.util.NavigableSet;
import java.util.TreeSet;

public class NavigableSetExample {
    public static void main(String[] args) {
        NavigableSet<Integer> navigableSet = new TreeSet<>();
        navigableSet.add(3);
        navigableSet.add(1);
        navigableSet.add(2);
        navigableSet.add(4);
        System.out.println("NavigableSet: " + navigableSet);

        // * Accessing Elememnt
        int check = 3;

        // Check if the above string exisnavigableSet in
        // the NavigableSet or not
        System.out.println("Contains " + check + " " + navigableSet.contains(check));

        // Print the first element in
        // the NavigableSet
        System.out.println("First Value " + navigableSet.first());

        // Print the last element in
        // the NavigableSet
        System.out.println("Last Value " + navigableSet.last());

        // * Removing the elementt */

        navigableSet.remove(2);

        System.out.println("After removing element " + navigableSet);

        // Remove the First element of TreeSet
        navigableSet.pollFirst();

        System.out.println("After the removal of First Element " + navigableSet);

        // Remove the Last element of TreeSet
        navigableSet.pollLast();

        System.out.println("After the removal of Last Element " + navigableSet);

    }
}
