def pow(x, p):
    answ = 1
    for i in range(int(p)):
        answ*=x
    return answ
x, p = map(float,input().split())    
print(pow(x,p))