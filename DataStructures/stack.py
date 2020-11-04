""" Implement Stack Data Structure with Python """
import time


class PyStack:
    def __init__(self):
        self.array = ["default py element", "N/A"]
        self.timestamp = time.time()

    def get_class_info(self):
        return self.array, self.timestamp

    def get_array(self):
        return self.array

    def push(self, element):
        return self.array.append(element)

    def pop(self):
        return self.array.pop()


print("Test Python Stack")
python_stack = PyStack()
python_stack.push("new element")
print(python_stack.pop())
print(python_stack.get_class_info())
