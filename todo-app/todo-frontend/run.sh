#!/bin/bash

clear
sudo docker build . -t todo-frontend
sudo docker run -p 5001:3000 todo-frontend
