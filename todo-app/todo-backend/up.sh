#!/bin/bash

clear
sudo docker compose -f docker-compose.dev.yml down --volumes
sudo docker compose -f docker-compose.dev.yml up --build
