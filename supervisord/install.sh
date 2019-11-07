#!/bin/bash

if [ "install" == "${1}" ];then
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
fi

sudo cp barcode.conf /etc/supervisor/conf.d/barcode.conf
sudo cp barcode-zmq-pub.conf /etc/supervisor/conf.d/barcode-zmq.conf
sudo cp barcode-zmq-pub.conf /etc/supervisor/conf.d/barcode-zmq_pub.conf
sudo cp barcode-zmq-sub.conf /etc/supervisor/conf.d/barcode-zmq-sub.conf

sudo supervisorctl update
