#!/bin/bash

sudo apt-get install supervisor
sudo systemctl enable supervisor
sudo systemctl start supervisor

sudo pip3 install evdev
pip3 install evdev

sudo pip3 install pathlib
pip3 install pathlib

sudo pip3 install websockets
pip3 install websockets

sudo cp barcode.conf /etc/supervisor/conf.d/barcode.conf
sudo supervisorctl update
sudo cp -rf ../websocket/htdocs /var/www/html/barcode
