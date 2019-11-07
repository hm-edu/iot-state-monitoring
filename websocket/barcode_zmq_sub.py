import sys
import zmq
import redis

r = redis.Redis(host='localhost', port=6379, db=0)
port = "5556"
context = zmq.Context()
socket = context.socket(zmq.SUB)
socket.connect ("tcp://localhost:%s" % port)
topicfilter = "barcode"
socket.setsockopt_string(zmq.SUBSCRIBE, topicfilter)
while True:
    print("waiting for data from barcode scanner")
    string = socket.recv()
    topic, messagedata = string.split()
    print("writing scanned code to redis")
    r.lpush('barcode-scanner', messagedata)
    print(topic, messagedata)
