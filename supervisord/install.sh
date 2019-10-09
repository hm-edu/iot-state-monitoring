#!/bin/bash

sudo apt-get install supervisor
sudo systemctl enable supervisor
sudo systemctl start supervisor

sudo pip install evdev
sudo pip2 install evdev
pip install evdev
pip2 install evdev

sudo cp barcode.conf /etc/supervisor/conf.d/barcode.conf
sudo supervisorctl update
