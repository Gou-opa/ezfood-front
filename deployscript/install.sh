#!/usr/bin/env bash
set -e

# update instance
yum -y update

# add nodejs to yum
curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -
yum -y install nodejs #default-jre ImageMagick

# install pm2 module globaly
npm install -g serve