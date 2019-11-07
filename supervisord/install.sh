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

sudo pip3 install pyzmq
pip3 install pyzmq

sudo pip3 install redis
pip3 install redis

sudo cp barcode.conf /etc/supervisor/conf.d/barcode.conf
sudo cp barcode_zmq_pub.conf /etc/supervisor/conf.d/barcode_zmq.conf
sudo cp barcode_zmq_pub.conf /etc/supervisor/conf.d/barcode_zmq_pub.conf
sudo cp barcode_zmq_sub.conf /etc/supervisor/conf.d/barcode_zmq_sub.conf
sudo supervisorctl update
sudo cp -rf ../websocket/htdocs /var/www/html/barcode
