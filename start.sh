#!/bin/bash

tar xzf griffith.tgz

export PORT=80
export MONGO_URL=mongodb://localhost:27017/griffith
export ROOT_URL=http://griffith.a2staging.com

forever start bundle/main.js
