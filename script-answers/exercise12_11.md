# Exercise 12.11

```bash
Script started on 2023-03-31 12:08:55+03:00 [TERM="xterm-256color" TTY="/dev/pts/22" COLUMNS="83" LINES="24"]
rauhalar@lx0-fuxi001:~/Git/part12-containers-applications$ sudo docker container list
[sudo] password for rauhalar: 
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                                         NAMES
7e9c4370d56d   mongo     "docker-entrypoint.s…"   7 minutes ago   Up 7 minutes   0.0.0.0:3456->27017/tcp, :::3456->27017/tcp   todo-backend-mongo-1
e2870faaa9b0   redis     "docker-entrypoint.s…"   7 minutes ago   Up 7 minutes   0.0.0.0:6378->6379/tcp, :::6378->6379/tcp     todo-backend-redis-1
rauhalar@lx0-fuxi001:~/Git/part12-containers-applications$ sudo docker exec -it todo-backend-redis-1 redis-cli
127.0.0.1:6379> KEYS *
1) "todos"
127.0.0.1:6379> GET todos
"13"
127.0.0.1:6379> SET todos 9001
OK
127.0.0.1:6379> GET todos
"9001"
127.0.0.1:6379> GET todos
"9002"
127.0.0.1:6379> GETDEL todos
"9002"
127.0.0.1:6379> GET todos
(nil)
127.0.0.1:6379> GET todos
"1"
127.0.0.1:6379> exit
rauhalar@lx0-fuxi001:~/Git/part12-containers-applications$ exit
exit

Script done on 2023-03-31 12:13:19+03:00 [COMMAND_EXIT_CODE="0"]
```
