list3=['frwg','eqhqte','etgG',123,4151,5362,4526.425,67,45.2,53.2,43,12,'REG']
s=[]
i=[]
f=[]
for x in list3:
    if(type(x)==int):i.append(x)
    if(type(x)==float):f.append(x)
    if(type(x)==str):s.append(x)
print(i)
print(s)
print(f)