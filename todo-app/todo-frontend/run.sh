#!/bin/bash

clear
sudo docker build . -t todo-frontend
sudo docker run -p 8000:80 todo-frontend
