#include <iostream>
#include <vector>

int main()
{
    std::vector<int> arrayList = {1, 2, 3, 4, 5};
    std::cout << "Array list";

    for (int num : arrayList)
    {
        std::cout << num << "  ";
    }
    std::cout << std::endl;
}