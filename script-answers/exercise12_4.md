# Exercise 12.4

```bash
Script started on 2023-03-29 15:13:44+03:00 [TERM="xterm-256color" TTY="/dev/pts/8" COLUMNS="92" LINES="48"]
rauhalar@lx0-fuxi001:~$ sudo docker start -i intelligent_knuth
root@23ac8bfec34f:/# apt install -y curl
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  ca-certificates libbrotli1 libcurl4 libldap-2.5-0 libldap-common libnghttp2-14 libpsl5
  librtmp1 libsasl2-2 libsasl2-modules libsasl2-modules-db libssh-4 openssl publicsuffix
Suggested packages:
  libsasl2-modules-gssapi-mit | libsasl2-modules-gssapi-heimdal libsasl2-modules-ldap
  libsasl2-modules-otp libsasl2-modules-sql
The following NEW packages will be installed:
  ca-certificates curl libbrotli1 libcurl4 libldap-2.5-0 libldap-common libnghttp2-14
  libpsl5 librtmp1 libsasl2-2 libsasl2-modules libsasl2-modules-db libssh-4 openssl
  publicsuffix
0 upgraded, 15 newly installed, 0 to remove and 0 not upgraded.
Need to get 2977 kB of archives.
After this operation, 7100 kB of additional disk space will be used.
Get:1 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 openssl amd64 3.0.2-0ubuntu1.8 [1184 kB]
Get:2 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 ca-certificates all 20211016ubuntu0.22.04.1 [144 kB]
Get:3 http://archive.ubuntu.com/ubuntu jammy/main amd64 libnghttp2-14 amd64 1.43.0-1build3 [76.3 kB]
Get:4 http://archive.ubuntu.com/ubuntu jammy/main amd64 libpsl5 amd64 0.21.0-1.2build2 [58.4 kB]
Get:5 http://archive.ubuntu.com/ubuntu jammy/main amd64 publicsuffix all 20211207.1025-1 [129 kB]
Get:6 http://archive.ubuntu.com/ubuntu jammy/main amd64 libbrotli1 amd64 1.0.9-2build6 [315 kB]
Get:7 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 libsasl2-modules-db amd64 2.1.27+dfsg2-3ubuntu1.2 [20.5 kB]
Get:8 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 libsasl2-2 amd64 2.1.27+dfsg2-3ubuntu1.2 [53.8 kB]
Get:9 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 libldap-2.5-0 amd64 2.5.14+dfsg-0ubuntu0.22.04.1 [183 kB]
Get:10 http://archive.ubuntu.com/ubuntu jammy/main amd64 librtmp1 amd64 2.4+20151223.gitfa8646d.1-2build4 [58.2 kB]
Get:11 http://archive.ubuntu.com/ubuntu jammy/main amd64 libssh-4 amd64 0.9.6-2build1 [184 kB]
Get:12 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 libcurl4 amd64 7.81.0-1ubuntu1.10 [290 kB]
Get:13 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 curl amd64 7.81.0-1ubuntu1.10 [194 kB]
Get:14 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 libldap-common all 2.5.14+dfsg-0ubuntu0.22.04.1 [15.9 kB]
Get:15 http://archive.ubuntu.com/ubuntu jammy-updates/main amd64 libsasl2-modules amd64 2.1.27+dfsg2-3ubuntu1.2 [68.8 kB]
Fetched 2977 kB in 5s (613 kB/s)           
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package openssl.
(Reading database ... 4468 files and directories currently installed.)
Preparing to unpack .../00-openssl_3.0.2-0ubuntu1.8_amd64.deb ...
Unpacking openssl (3.0.2-0ubuntu1.8) ...
Selecting previously unselected package ca-certificates.
Preparing to unpack .../01-ca-certificates_20211016ubuntu0.22.04.1_all.deb ...
Unpacking ca-certificates (20211016ubuntu0.22.04.1) ...
Selecting previously unselected package libnghttp2-14:amd64.
Preparing to unpack .../02-libnghttp2-14_1.43.0-1build3_amd64.deb ...
Unpacking libnghttp2-14:amd64 (1.43.0-1build3) ...
Selecting previously unselected package libpsl5:amd64.
Preparing to unpack .../03-libpsl5_0.21.0-1.2build2_amd64.deb ...
Unpacking libpsl5:amd64 (0.21.0-1.2build2) ...
Selecting previously unselected package publicsuffix.
Preparing to unpack .../04-publicsuffix_20211207.1025-1_all.deb ...
Unpacking publicsuffix (20211207.1025-1) ...
Selecting previously unselected package libbrotli1:amd64.
Preparing to unpack .../05-libbrotli1_1.0.9-2build6_amd64.deb ...
Unpacking libbrotli1:amd64 (1.0.9-2build6) ...
Selecting previously unselected package libsasl2-modules-db:amd64.
Preparing to unpack .../06-libsasl2-modules-db_2.1.27+dfsg2-3ubuntu1.2_amd64.deb ...
Unpacking libsasl2-modules-db:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
Selecting previously unselected package libsasl2-2:amd64.
Preparing to unpack .../07-libsasl2-2_2.1.27+dfsg2-3ubuntu1.2_amd64.deb ...
Unpacking libsasl2-2:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
Selecting previously unselected package libldap-2.5-0:amd64.
Preparing to unpack .../08-libldap-2.5-0_2.5.14+dfsg-0ubuntu0.22.04.1_amd64.deb ...
Unpacking libldap-2.5-0:amd64 (2.5.14+dfsg-0ubuntu0.22.04.1) ...
Selecting previously unselected package librtmp1:amd64.
Preparing to unpack .../09-librtmp1_2.4+20151223.gitfa8646d.1-2build4_amd64.deb ...
Unpacking librtmp1:amd64 (2.4+20151223.gitfa8646d.1-2build4) ...
Selecting previously unselected package libssh-4:amd64.
Preparing to unpack .../10-libssh-4_0.9.6-2build1_amd64.deb ...
Unpacking libssh-4:amd64 (0.9.6-2build1) ...
Selecting previously unselected package libcurl4:amd64.
Preparing to unpack .../11-libcurl4_7.81.0-1ubuntu1.10_amd64.deb ...
Unpacking libcurl4:amd64 (7.81.0-1ubuntu1.10) ...
Selecting previously unselected package curl.
Preparing to unpack .../12-curl_7.81.0-1ubuntu1.10_amd64.deb ...
Unpacking curl (7.81.0-1ubuntu1.10) ...
Selecting previously unselected package libldap-common.
Preparing to unpack .../13-libldap-common_2.5.14+dfsg-0ubuntu0.22.04.1_all.deb ...
Unpacking libldap-common (2.5.14+dfsg-0ubuntu0.22.04.1) ...
Selecting previously unselected package libsasl2-modules:amd64.
Preparing to unpack .../14-libsasl2-modules_2.1.27+dfsg2-3ubuntu1.2_amd64.deb ...
Unpacking libsasl2-modules:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
Setting up libpsl5:amd64 (0.21.0-1.2build2) ...
Setting up libbrotli1:amd64 (1.0.9-2build6) ...
Setting up libsasl2-modules:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
Setting up libnghttp2-14:amd64 (1.43.0-1build3) ...
Setting up libldap-common (2.5.14+dfsg-0ubuntu0.22.04.1) ...
Setting up libsasl2-modules-db:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
Setting up librtmp1:amd64 (2.4+20151223.gitfa8646d.1-2build4) ...
Setting up libsasl2-2:amd64 (2.1.27+dfsg2-3ubuntu1.2) ...
Setting up libssh-4:amd64 (0.9.6-2build1) ...
Setting up openssl (3.0.2-0ubuntu1.8) ...
Setting up publicsuffix (20211207.1025-1) ...
Setting up libldap-2.5-0:amd64 (2.5.14+dfsg-0ubuntu0.22.04.1) ...
Setting up ca-certificates (20211016ubuntu0.22.04.1) ...
debconf: unable to initialize frontend: Dialog
debconf: (No usable dialog-like program is installed, so the dialog based frontend cannot be
 used. at /usr/share/perl5/Debconf/FrontEnd/Dialog.pm line 78.)
debconf: falling back to frontend: Readline
debconf: unable to initialize frontend: Readline
debconf: (Can't locate Term/ReadLine.pm in @INC (you may need to install the Term::ReadLine 
module) (@INC contains: /etc/perl /usr/local/lib/x86_64-linux-gnu/perl/5.34.0 /usr/local/sha
re/perl/5.34.0 /usr/lib/x86_64-linux-gnu/perl5/5.34 /usr/share/perl5 /usr/lib/x86_64-linux-g
nu/perl-base /usr/lib/x86_64-linux-gnu/perl/5.34 /usr/share/perl/5.34 /usr/local/lib/site_pe
rl) at /usr/share/perl5/Debconf/FrontEnd/Readline.pm line 7.)
debconf: falling back to frontend: Teletype
Updating certificates in /etc/ssl/certs...
124 added, 0 removed; done.
Setting up libcurl4:amd64 (7.81.0-1ubuntu1.10) ...
Setting up curl (7.81.0-1ubuntu1.10) ...
Processing triggers for libc-bin (2.35-0ubuntu3.1) ...
Processing triggers for ca-certificates (20211016ubuntu0.22.04.1) ...
Updating certificates in /etc/ssl/certs...
0 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d...
done.
root@23ac8bfec34f:/# curl -sL https://deb.nodesource.com/setup_16.x | bash

## Installing the NodeSource Node.js 16.x repo...


## Populating apt-get cache...

+ apt-get update
Get:1 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
Hit:2 http://archive.ubuntu.com/ubuntu jammy InRelease 
Get:3 http://archive.ubuntu.com/ubuntu jammy-updates InRelease [119 kB]
Get:4 http://archive.ubuntu.com/ubuntu jammy-backports InRelease [107 kB]
Get:5 http://archive.ubuntu.com/ubuntu jammy-backports/universe amd64 Packages [23.3 kB]
Fetched 359 kB in 2s (199 kB/s)      
Reading package lists... Done

## Installing packages required for setup: lsb-release gnupg...

+ apt-get install -y lsb-release gnupg > /dev/null 2>&1

## Confirming "jammy" is supported...

+ curl -sLf -o /dev/null 'https://deb.nodesource.com/node_16.x/dists/jammy/Release'

## Adding the NodeSource signing key to your keyring...

+ curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor | tee /usr/share/keyrings/nodesource.gpg >/dev/null

## Creating apt sources list file for the NodeSource Node.js 16.x repo...

+ echo 'deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_16.x jammy main' > /etc/apt/sources.list.d/nodesource.list
+ echo 'deb-src [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_16.x jammy main' >> /etc/apt/sources.list.d/nodesource.list

## Running `apt-get update` for you...

+ apt-get update
Get:1 https://deb.nodesource.com/node_16.x jammy InRelease [4583 B]
Hit:2 http://archive.ubuntu.com/ubuntu jammy InRelease                         
Get:3 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
Get:4 http://archive.ubuntu.com/ubuntu jammy-updates InRelease [119 kB]
Get:5 https://deb.nodesource.com/node_16.x jammy/main amd64 Packages [777 B]              
Hit:6 http://archive.ubuntu.com/ubuntu jammy-backports InRelease 
Fetched 234 kB in 2s (152 kB/s)
Reading package lists... Done

## Run `sudo apt-get install -y nodejs` to install Node.js 16.x and npm
## You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
     echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn


root@23ac8bfec34f:/# apt install -y nodejs
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following NEW packages will be installed:
  nodejs
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 27.2 MB of archives.
After this operation, 128 MB of additional disk space will be used.
Get:1 https://deb.nodesource.com/node_16.x jammy/main amd64 nodejs amd64 16.19.1-deb-1nodesource1 [27.2 MB]
Fetched 27.2 MB in 2s (12.7 MB/s) 
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package nodejs.
(Reading database ... 6025 files and directories currently installed.)
Preparing to unpack .../nodejs_16.19.1-deb-1nodesource1_amd64.deb ...
Unpacking nodejs (16.19.1-deb-1nodesource1) ...
Setting up nodejs (16.19.1-deb-1nodesource1) ...
root@23ac8bfec34f:/# node /usr/src/app/index.js 
Hello world!
root@23ac8bfec34f:/# exit
exit
exitrauhalar@lx0-fuxi001:~$ exit
exit

Script done on 2023-03-29 15:15:44+03:00 [COMMAND_EXIT_CODE="0"
```
