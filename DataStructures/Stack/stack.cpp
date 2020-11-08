/* Implementing a Stack Data Structure with C++ */
#include <string>
#include <stdio.h>
#include <time.h>
#include <iostream>

using std::string;

// Using a class
class CStack
{
public:
    string array[10];

    int arrLength = (sizeof(array) / sizeof(*array));

    void setArray(string newArray[])
    {
        for (int i = 0; i < arrLength; i++)
        {
            array[i] = newArray[i];
        }
    }
    string *getArray(void)
    {
        return array;
    }
};

int main()
{
    CStack myStack;
    std::cout << "Testing C++ Stack" << std::endl;
    std::cout << myStack.getArray()[0];
    return 0;
}