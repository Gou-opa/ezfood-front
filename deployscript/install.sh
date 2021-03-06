#!/usr/bin/env bash
set -e

# update instance
apt-get update

# add nodejs to yum
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
apt install nodejs -y #default-jre ImageMagick

# install pm2 module globaly
npm install -g serve