import zmq
import websocket

port = "5556"
context = zmq.Context()
socket = context.socket(zmq.SUB)
socket.connect ("tcp://localhost:%s" % port)
topicfilter = "barcode-scanner"
socket.setsockopt_string(zmq.SUBSCRIBE, topicfilter)

try:
    import thread
except ImportError:
    import _thread as thread
import time

def on_message(ws, message):
    print(message)

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    def run(*args):
        while True:
            time.sleep(1)
            print("waiting for data from barcode scanner")
            string = socket.recv()
            topic, messagedata = string.split()
            print("received barcode message", topic, messagedata)
            ws.send("%s" % messagedata.decode("utf-8"))
            time.sleep(1)
            print("thread terminating...")
        ws.close()
    thread.start_new_thread(run, ())


if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp("ws://127.0.0.1:8081",
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open
    ws.run_forever()
