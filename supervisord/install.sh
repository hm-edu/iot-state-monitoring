#!/bin/bash

sudo apt-get install supervisor
sudo systemctl enable supervisor
sudo systemctl start supervisor

sudo pip install evdev
sudo pip2 install evdev
pip install evdev
pip2 install evde

udo pip install websockets
sudo pip2 install websockets
pip install websockets
pip2 install websockets

sudo cp barcode.conf /etc/supervisor/conf.d/barcode.conf
sudo supervisorctl update
