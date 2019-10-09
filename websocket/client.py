import asyncio
import websockets

async def getBarCode():
    uri = "ws://127.0.0.1:8080"
    async with websockets.connect(uri) as websocket:
        barcodeTxt = await websocket.recv()
        print(barcodeTxt)

asyncio.get_event_loop().run_until_complete(getBarCode())
