#!/bin/bash

sudo apt-get install supervisor
sudo systemctl enable supervisor
sudo systemctl start supervisor

sudo cp barcode.conf /etc/supervisor/conf.d/barcode.conf
sudo supervisorctl update
