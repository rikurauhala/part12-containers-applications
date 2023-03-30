# Exercise 12.8

```bash
Script started on 2023-03-30 21:27:39+03:00 [TERM="xterm-256color" TTY="/dev/pts/18"]
rauhalar@lx0-fuxi001:~/Git/part12-containers-applications$ sudo docker exec -it todo-backend-mongo-1 bash
root@f06f208caef8:/# mongosh -u root -p example
Current Mongosh Log ID: 6425d4c5503c8d8026a222fc
Connecting to:          mongodb://<credentials>@127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0
Using MongoDB:          6.0.5
Using Mongosh:          1.8.0

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2023-03-30T12:32:26.053+00:00: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine. See http://dochub.mongodb.org/core/prodnotes-filesystem
   2023-03-30T12:32:26.941+00:00: Soft rlimits for open file descriptors too low
------

------
   Enable MongoDB's free cloud-based monitoring service, which will then receive and display
   metrics about your deployment (disk utilization, CPU, operation statistics, etc).
   
   The monitoring data will be available on a MongoDB website with a unique URL accessible to you
   and anyone you share the URL with. MongoDB may use this information to make product
   improvements and to suggest MongoDB products and deployment options to you.
   
   To enable free monitoring, run the following command: db.enableFreeMonitoring()
   To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
------

test> show dbs
admin     100.00 KiB
config     60.00 KiB
database   56.00 KiB
local      72.00 KiB
test> use database
switched to db database
database> show collections
todos
database> db.todos.find({})
[
  {
    _id: ObjectId("64258158f64cbdc122d28f3f"),
    done: false,
    text: 'Write some code'
  },
  {
    _id: ObjectId("64258158f64cbdc122d28f40"),
    text: 'Learn about containers',
    done: false
  }
]
database> db.todos.insertOne({text: 'Use MongoDB', done: true})
{
  acknowledged: true,
  insertedId: ObjectId("6425d5230134038c8c1b292c")
}
database> db.todos.find({})
[
  {
    _id: ObjectId("64258158f64cbdc122d28f3f"),
    done: false,
    text: 'Write some code'
  },
  {
    _id: ObjectId("64258158f64cbdc122d28f40"),
    text: 'Learn about containers',
    done: false
  },
  {
    _id: ObjectId("6425d5230134038c8c1b292c"),
    text: 'Use MongoDB',
    done: true
  }
]
database> exit
root@f06f208caef8:/# exit
exit
rauhalar@lx0-fuxi001:~/Git/part12-containers-applications$ exit
exit

Script done on 2023-03-30 21:30:22+03:00 [COMMAND_EXIT_CODE="0"]
```
