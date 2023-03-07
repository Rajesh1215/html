def a(x,y):
    if(y==0):
        return 0
    else:
        return x+a(x,y-1)
    
print(a(6,9))