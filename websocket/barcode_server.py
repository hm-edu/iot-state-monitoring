import os
import sys

# set the path to the barcode reader
sys.path.append('/home/pi/raspberrypi4/barcode')

import read
import asyncio
import websockets

async def barcodeFn(websocket, path):
    await websocket.recv()
    while True:
        barcodeTxt = read.barcode('/dev/input/event0')
        print(barcodeTxt)
        await websocket.send(barcodeTxt)

#start_server = websockets.serve(barcodeFn, "127.0.0.1", 8080)
start_server = websockets.serve(barcodeFn, "0.0.0.0", 8080)


asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
