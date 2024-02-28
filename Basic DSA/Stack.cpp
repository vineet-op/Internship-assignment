#include <iostream>

#define MAX_SIZE 100 // Maximum size of the stack

class Stack
{
private:
    int top;            // Index of the top element
    int data[MAX_SIZE]; // Array to store elements

public:
    // Constructor
    Stack()
    {
        top = -1; // Initialize top to -1 (empty stack)
    }

    // Function to push an element onto the stack
    void push(int element)
    {
        if (top == MAX_SIZE - 1)
        {
            std::cout << "Stack overflow! Cannot push element.\n";
            return;
        }
        data[++top] = element; // Increment top and insert element
        std::cout << "Pushed " << element << " onto the stack.\n";
    }

    // Function to pop an element from the stack
    int pop()
    {
        if (isEmpty())
        {
            std::cout << "Stack underflow! Cannot pop element.\n";
            return -1;
        }
        std::cout << "Popped " << data[top] << " from the stack.\n";
        return data[top--]; // Return and decrement top
    }

    // Function to check if the stack is empty
    bool isEmpty()
    {
        return top == -1;
    }

    // Function to return the top element of the stack without removing it
    int peek()
    {
        if (isEmpty())
        {
            std::cout << "Stack is empty! No element to peek.\n";
            return -1;
        }
        return data[top];
    }
};

int main()
{
    Stack stack;

    // Push some elements onto the stack
    stack.push(5);
    stack.push(10);
    stack.push(15);

    // Peek at the top element
    std::cout << "Top element: " << stack.peek() << std::endl;

    // Pop an element
    stack.pop();

    // Peek at the top element after popping
    std::cout << "Top element after popping: " << stack.peek() << std::endl;

    // Pop remaining elements
    while (!stack.isEmpty())
    {
        stack.pop();
    }

    return 0;
}
