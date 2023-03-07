n=[]
s=[]
ns=[]
for i in range(1,101):
    if(i%7==0):n.append(i) 
    if(i%9==0):s.append(i) 
    if(i%9==0 and i%7==0):ns.append(i)

print(n)
print(s)
print(ns)