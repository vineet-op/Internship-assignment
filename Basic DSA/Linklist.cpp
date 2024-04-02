#include <iostream>
#include <list>

// Define the LinkedList class
class LinkedList
{
private:
    std::list<int> list; // Using std::list as the underlying container

public:
    // Function to insert an element at the end of the list
    void insert(int data)
    {
        list.push_back(data);
    }

    // Function to display the elements of the list
    void display()
    {
        for (int num : list)
        {
            std::cout << num << " ";
        }
        std::cout << std::endl;
    }

    // Function to remove an element from the list
    void remove(int data)
    {
        list.remove(data);
    }
};

int main()
{
    // Create a LinkedList object
    LinkedList ll;

    // Insert some elements into the list
    ll.insert(5);
    ll.insert(10);
    ll.insert(15);

    // Display the elements of the list
    std::cout << "LinkedList: ";
    ll.display();

    // Remove an element from the list
    ll.remove(10);

    // Display the updated list
    std::cout << "Updated LinkedList: ";
    ll.display();

    return 0;
}
