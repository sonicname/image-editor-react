import random
import string

import cv2
import sys

try:
    img = cv2.imread(fr"{sys.argv[1]}")
    res = cv2.bilateralFilter(img, 15, 75, 75)
    file_output_name = ''.join(random.sample(string.ascii_lowercase, 8))
    cv2.imwrite(fr"uploads/{file_output_name}.png", res)
    print(fr"{file_output_name}.png")
except IOError:
    print('Error while reading files !!!')
