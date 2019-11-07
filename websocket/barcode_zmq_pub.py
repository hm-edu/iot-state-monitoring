import sys
# set the path to the barcode reader
sys.path.append('/home/pi/raspberrypi4/barcode')
import read
import zmq
import random
import time

port = "5556"
if len(sys.argv) > 1:
    port =  sys.argv[1]
    int(port)

context = zmq.Context()
socket = context.socket(zmq.PUB)
socket.bind("tcp://*:%s" % port)

print("waiting for barcode to be scanned...")

while True:
    topic = "barcode-scanner"
    messagedata = read.barcode('/dev/input/event7')
    print(topic, messagedata)
    socket.send_string("%s %s" % (topic, messagedata))
