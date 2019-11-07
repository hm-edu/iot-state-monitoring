import sys
import zmq
import redis
from websocket import create_connection

r = redis.Redis(host='localhost', port=6379, db=0)
port = "5556"
context = zmq.Context()
socket = context.socket(zmq.SUB)
socket.connect ("tcp://localhost:%s" % port)
topicfilter = "barcode"
socket.setsockopt_string(zmq.SUBSCRIBE, topicfilter)

def sendBarCode():
    uri = "ws://127.0.0.1:8081"
    ws = create_connection(uri)
    if (r.llen('barcode-scanner') > 0):
        print("send barcode to server...")
        ws.send(r.lpop('barcode-scanner').decode("utf-8"))
        ws.close()
        print("closed connection to server...")

while True:
    print("waiting for data from barcode scanner")
    string = socket.recv()
    topic, messagedata = string.split()
    print("writing scanned code to redis")
    r.lpush('barcode-scanner', messagedata)
    print("pushed barcode to redis", topic, messagedata)
    sendBarCode()
