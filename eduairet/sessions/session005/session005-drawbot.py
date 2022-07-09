'''
8 Jul 2022 - Rank Vector
https://www.codewars.com/kata/545f05676b42a0a195000d95/train/python
'''

from drawBot import * #El módulo DrawBot solo funciona en Mac

# Tests de la coding Challenge
tests = [
    [9,3,6,10], # [2,4,3,1]
    [3,3,3,3,3,5,1], # [2,2,2,2,2,1,7]
    [1,2,3,4,5,6,7,8,9,10] # [10,9,8,7,6,5,4,3,2,1]
]

# Transforma valores de color de 0 a 255 a valores de 0 a 1
def dbCl(r,g,b):
    rgb = (r,g,b)
    return tuple(c/255 for c in rgb)
    
# Fórmula de interpolación lineal
def lerp(a,b,factor):
    return a + (b - a) * factor
    
# Interpolación lineal de dos colores
def lerpColor(c1,c2,factor):
    return tuple(lerp(c1[i],c2[i],factor) for i in range(len(c1)))

# Primer lugar dorado -> rgb 245, 176, 14   
dorado = dbCl(245, 176, 14)
# Último rojo -> rgb 230, 48, 32 
rojo = dbCl(230, 48, 32)

# Valores para hacer el test
currentTest = tests[1]
# Rank list es el resultado que necesita la Coding Challenge
rankList = [sorted(currentTest,reverse=True).index(n) + 1 for n in currentTest]

# Loop de dibujo
frames = len(currentTest)
for frame in range(frames):
    newPage(1080,1080)
    frameDuration(1/12)
    # Cuadro de la izquierda
    with savedState():
        fill(*lerpColor(dorado,rojo,rankList[frame]/frames))
        rect(0,0,width()*.5,height())
    # Cuadro de la derecha
    with savedState():
        fill(*lerpColor(dorado,rojo,frame/frames))
        rect(width()*.5,0,width()*.5,height())

# Función de exportación      
saveImage('~/Desktop/rank.gif')
