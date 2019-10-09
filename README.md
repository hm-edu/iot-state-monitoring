# raspberrypi4

## installation
```bash
   git clone https://git.evalgo.org/axxepta/iot/raspberrypi4.git ${HOME}/raspberrypi4
   cd ${HOME}/raspberrypi4
   pip install evdev
```

## barcode
```bash
    # requirements
    pip install evdev
    pip install pathlib
    pip install websockets
```

## webhook
```bash
   # will run the go server to display the POST data from the send.py script
   go run webhook/test-server.go
   # will send the readed data from the barcode scanner device
   # you need to edit the scan.py file and change the url and the device path
   python send.py
```

## supervisord
```bash
   # you will probably need to update the barcode.conf because of the application path if it will change
   cd supervisord
   ./install.sh
```
