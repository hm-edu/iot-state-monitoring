# Benutzung unter Microsoft Windows 
(für macOS und Linux mit leichten Anpassungen adaptierbar)

## Grundvoraussetzungen
1. Microsoft Visual Studio Code installieren (https://code.visualstudio.com/)
2. GitHub Desktop installieren (https://desktop.github.com/)
3. Python über den Microsoft Store als aktuellste Version installieren <br>
	(alternativ Python über den folgenden Link installieren (https://www.python.org/downloads/)   

## Code öffnen und bearbeiten
1. GitHub Desktop öffnen -> benötigtes Repository von GitHub klonen
### Hinweis: Die Daten müssen sich auf einem lokalen Ordner befinden, keinen mit OneDrive synchronisierten Ordner verwenden
2. Anschließend Repository über GitHub mit  Visual Studio Code öffnen <br>
(3. falls sich unten rechts ein Popup-Fenster öffnet, welches die Installation von Python Extensions vorschlägt -> Installieren)

### Hinweis: Ab hier arbeiten wir ausschließlich im Verzeichnis "websockets" mit der Datei "client.py"
## Benötigte Bibliotheken installieren
 oben rechts auf grünen Pfeil "run" klicken -> unten öffnet sich ein Terminalfenster. Dort mit folgenden Kommandozeilenbefehlen die benötigten Module installieren.
 
	
		pip install websockets
		(falls ein Hinweis zum Upgrade der installierten pip-Version rät, diesen befolgen: "python.exe -m pip install --upgrade pip")
		 
		pip install asyncio 


## Modulverwaltung innerhalb der Kommandozeile
mit `cd ["Pfad/zum/Verzeichnis"]` kann in das gewünschte Verzeichnis gewechselt werden

## Ausführen
```	
	cd websocket
	py barcode_server.py
	(alternativ, wenn das nicht funktioniert stattdessen: "python barcode_server.py")
```
*neues Terminalfenster öffnen*

``` 
	py client.py
```

*mit Strg + c lassen sich die Prozesse stoppen*


# Mit Raspberry Pi4 als Server
## Vorbereitung
```bash
Hardware:
Raspberry Pi 4 (4GB)
Software:
Raspberry Pi OS Lite (32-bit) (using Raspberry Pi Imager)
```
![photo5855207474892747808 (1)](https://user-images.githubusercontent.com/32871117/98594021-5803fe80-22d4-11eb-87b4-eda33f4dc424.jpg)

## installation
```bash
   sudo apt update
   sudo apt install git (confirm with Y)
   git clone https://github.com/hm-edu/iot-state-monitoring.git ${HOME}raspberrypi4
   cd ${HOME}/raspberrypi4
   sudo apt install python3-pip (confirm with Y)
   sudo apt install python-pip (confirm with Y)
   pip install evdev
```

## barcode
```bash
    # requirements
    pip install pathlib
    pip3 install websockets
    # for the zmq version
    pip install pyzmq
    pip install redis
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
