#!/bin/bash

meteor bundle griffith.tgz
tar xzf griffith.tgz

export PORT=80
export MONGO_URL=mongodb://localhost:27017/griffith
