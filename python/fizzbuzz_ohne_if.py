x = 3

def condition1():
    return "fizzbuzz"

def condition2():
    return "fizz"

def condition3():
    return "buzz"

# def condition4():
    # return number


conditions = {
    (lambda x: x % 3 == 0 and x % 5 == 0): condition1,
    (lambda x: x % 3 == 0 and x % 5 != 0): condition2,
    (lambda x: x % 5 == 0 and x % 3 != 0): condition3,
}

# result = next(message for condition == true, condition4)
# print(result)
