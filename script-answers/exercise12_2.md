# Exercise 12.2

```bash
Script started on 2023-03-29 14:18:53+03:00 [TERM="xterm-256color" TTY="/dev/pts/6" COLUMNS="92" LINES="48"]
rauhalar@lx0-fuxi001:~$ sudo docker container run -it ubuntu bash
[sudo] password for rauhalar: 
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
2ab09b027e7f: Pull complete 
Digest: sha256:67211c14fa74f070d27cc59d69a7fa9aeff8e28ea118ef3babc295a0428a6d21
Status: Downloaded newer image for ubuntu:latest
root@23ac8bfec34f:/# pwd
/
root@23ac8bfec34f:/# mkdir /usr/src/app
root@23ac8bfec34f:/# touch /usr/src/app/index.js
root@23ac8bfec34f:/# ls -l /usr/src/app/
total 0
-rw-r--r-- 1 root root 0 Mar 29 11:20 index.js
root@23ac8bfec34f:/# exit
exit
rauhalar@lx0-fuxi001:~$ exit
exit

Script done on 2023-03-29 14:20:39+03:00 [COMMAND_EXIT_CODE="0"]
```
