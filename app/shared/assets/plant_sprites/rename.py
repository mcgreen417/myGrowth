import os

count = 0
for i in range(0, 120):

    if (i % 6 == 0):
        count += 1
        print(count)

    if i < 10:
        fromFile = "tile00" + str(i) + ".png"
    elif i >= 10 and i < 100:
        fromFile = "tile0" + str(i) + ".png"
    else:
        fromFile = "tile" + str(i) + ".png"

    toFile = str(count) + "_" + str(i % 6) + ".png"

    print(fromFile)
    print(toFile)
    os.rename(fromFile, toFile)
