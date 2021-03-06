import os
import sys

# set the path to the barcode reader
#sys.path.append('../barcode')

#import read
import asyncio
import websockets

connected = set()

async def barcodeFn(websocket, path):
    #await websocket.recv()
    connected.add(websocket)
    try:
       async for message in websocket:
         await asyncio.wait([ws.send(message) for ws in connected])
       # while True:
        #    barcodeTxt = read.barcode('/dev/input/event0')
         #   print(barcodeTxt)
            #await websocket.send(barcodeTxt)

    finally:
         connected.remove(websocket)

print("starting service at 0.0.0.0:8081...")
#start_server = websockets.serve(barcodeFn, "127.0.0.1", 8080)
start_server = websockets.serve(barcodeFn, "0.0.0.0", 8080)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

