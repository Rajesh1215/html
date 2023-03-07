def a(a,b=0,*c):
    y=1
    for i in c:
        y=y*i
    return (a*b)+(y)

print(a(3,4,5,5,5,5))
