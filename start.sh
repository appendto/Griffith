#!/bin/bash

mrt install

meteor bundle griffith.tgz
tar xzf griffith.tgz

export PORT=80
export MONGO_URL=mongodb://localhost:27017/griffith
export ROOT_URL=http://162.243.74.40

forever start bundle/main.js
