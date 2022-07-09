'''
8 Jul 2022 - Rank Vector
https://www.codewars.com/kata/545f05676b42a0a195000d95/train/python
'''
# -----------------------------------------------------
tests = [
    [9,3,6,10], # [2,4,3,1]
    [3,3,3,3,3,5,1] # [2,2,2,2,2,1,7]
]

def ranks(a):
    '''Returns the rank of every element of the list'''
    return [sorted(a.copy(), reverse=True).index(num) + 1 for num in a]

for test in tests:
    print(ranks(test))
# -----------------------------------------------------
