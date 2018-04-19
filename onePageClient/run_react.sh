#!/bin/bash
docker run --rm -i -t -p 3000:3000 -v ${PWD}:/home/node/app -w /home/node/app node npm start
