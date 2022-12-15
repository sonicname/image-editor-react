import random
import string

import cv2
import sys

try:
    img = cv2.imread(fr"{sys.argv[1]}")
    (height, width) = img.shape[:2]
    res = cv2.resize(img, (int(width * int(sys.argv[2])), int(height * int(sys.argv[2]))), interpolation=cv2.INTER_CUBIC)
    file_output_name = ''.join(random.sample(string.ascii_lowercase, 8))
    cv2.imwrite(fr"uploads/{file_output_name}.png", res)
    print(fr"{file_output_name}.png")

except IOError:
    print('Error while reading files !!!')
