import asyncio
import websockets

async def getBarCode():
    uri = "ws://127.0.0.1:8080"
    async with websockets.connect(uri) as websocket:
        name = input("OK")
        await websocket.send(name)
        barcodeTxt = await websocket.recv()
        print(f"< {barcodeTxt}")

asyncio.get_event_lo€op().run_until_complete(getBarCode())
