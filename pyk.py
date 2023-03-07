k=input("k")
n=int(input("n"))
b=sorted([k[x:x+n] for x in range(0,len(k)-n+1)])
print(b[-1],b[0])