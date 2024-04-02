//*list is an STL container class that represents a doubly - linked list.It provides functionality similar to a linked list data structure, allowing dynamic insertion and removal of elements at any position within the list. */

#include <iostream>
#include <list>

int main()
{
    std::list<int> myList;

    // Insert Elements

    myList.push_back(50);
    myList.push_front(40);
    myList.push_back(90);

    // Display

    std::cout << "Original List: ";
    for (int num : myList)
    {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // Remove element

    myList.pop_front();

    std::cout << "Updated List: ";
    for (int num : myList)
    {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}