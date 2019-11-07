import os
import sys
import asyncio
import websockets
import redis
import time

r = redis.Redis(host='localhost', port=6379, db=0)

connected = set()
    
async def barcodeFn(websocket, path):
    connected.add(websocket)
    try:
        while True:
            if (r.llen('barcode-scanner') > 0):
                barcodeTxt = r.lpop('barcode-scanner').decode("utf-8")
                print("received barcode::", barcodeTxt)
                await asyncio.wait([ws.send(barcodeTxt) for ws in connected])
            else:
                print("no barcode data available")
                await asyncio.sleep(1)
    finally:
        connected.remove(websocket)

start_server = websockets.serve(barcodeFn, "0.0.0.0", 8080)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()

