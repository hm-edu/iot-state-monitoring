import os
import sys

# set the path to the barcode reader
sys.path.append(os.environ['HOME'] + '/raspberrypi4/barcode')

import urllib
import urllib2
import read

while True:
    url = 'http://localhost:8080/'
    values = {'barcode' : read.barcode('/dev/input/event0') }
    data = urllib.urlencode(values)
    req = urllib2.Request(url, data)
    response = urllib2.urlopen(req)
    print response.read()
