import sys
sys.path.append('C:\\development\\raspberrypi4\\barcode')

print sys.path

import urllib
import urllib2
from read import devices

print devices()

# url = 'http://localhost:8080/'

# values = {'barcode' : read('/dev/input/event0') }

# data = urllib.urlencode(values)
# req = urllib2.Request(url, data)
# response = urllib2.urlopen(req)
# print response.read()
