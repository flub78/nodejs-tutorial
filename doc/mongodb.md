# Mongodb

MongoDB is a document oriented database.
A documente is a set of key-values pairs.

It is schema less, which means that the fields can differ from one document to another.

## Installation

### On windows

    https://www.mongodb.com/download-center#community
    
After installation
    # start the server
    mkdir C:\data\db
    cd C:\data\db
    
Installation directory
    C:\Program Files\MongoDB\Server\3.4\bin
    
    mongod
    
    # start the MongoDB console
    mongo

## First steps

From the console
```
$ mongo
MongoDB shell version: 2.4.9
connecting to: test
> use admin
switched to db admin
> show users

> db.help()

> use admin
switched to db admin
> show users
> 

> show collections
acteurs
produits
system.indexes
...
```

### Collections
#### Create
A collection can be created explicitely
    db.createCollection("mycol", { capped : true, autoIndexId : true, size : 
...    6142800, max : 10000 } )

or my inserting some documents
db.tutorialspoint.insert({"name" : "tutorialspoint"})

#### List
> show collections
acteurs
produits
system.indexes
tutorialspoint

#### Delete
> db.tutorialspoint.drop()
true
> show collections
acteurs
produits
system.indexes

#### List elements of a collection

> db.mycol.find()
{ "_id" : ObjectId("5901dc391c48eff43970127c"), "title" : "MongoDB Overview", "description" : "MongoDB is no sql database", "by" : "tutorials point", "url" : "http://www.tutorialspoint.com", "tags" : [  "mongodb",  "database",  "NoSQL" ], "likes" : 100 }

or

> db.mycol.find()
{ "_id" : ObjectId("5901dc391c48eff43970127c"), "title" : "MongoDB Overview", "description" : "MongoDB is no sql database", "by" : "tutorials point", "url" : "http://www.tutorialspoint.com", "tags" : [  "mongodb",  "database",  "NoSQL" ], "likes" : 100 }

> db.mycol.find({'likes': 100}).count()
1
    





