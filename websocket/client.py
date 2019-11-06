import os
import sys

# set the path to the barcode reader
sys.path.append('/home/pi/raspberrypi4/barcode')

import read
import asyncio
import websockets

async def getBarCode():
    uri = "ws://127.0.0.1:8080"
    async with websockets.connect(uri) as websocket:
        barcodeTxt = await websocket.recv()
        print(barcodeTxt)
        
async def sendBarCode():
    uri = "ws://127.0.0.1:8080"
    async with websockets.connect(uri) as websocket:
         while True:
            barcodeTxt = read.barcode('/dev/input/event0')
            print(barcodeTxt)
            await websocket.send(barcodeTxt)

asyncio.get_event_loop().run_until_complete(sendBarCode())
