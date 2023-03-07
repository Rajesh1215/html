import time
def f(a):
    if a <= 1:
        return a
    else:
        return f(a-1) + f(a-2)

for i in range(0,40):
    start=time.time()
    result = f(i)
    print(start)
    start=0
    