import os
import sys

# set the path to the barcode reader
sys.path.append('/home/pi/raspberrypi4/barcode')

import read
import asyncio
import websockets

async def hello(websocket, path):
    await websocket.recv()
    barcode = read.barcode('/dev/input/event1')
    print barcode
    await websocket.send(barcode)

start_server = websockets.serve(hello, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
