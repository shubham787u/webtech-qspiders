//! humongous

//! data ==> raw of facts and figures

//? example ==> varun, 34, ashwin, 23

//! information ==> processed data
//? example ==> varun is 34 years old and ashwin is 23 years old

//~ database --> it is a container in which data is stored, fetch, update, etc..

//! DBMS (database management system) --> this is software which is used to manage the database (CRUD : create, read, update and delete)

//& there are two types of DBMS

//! SQL (oracle, mysql, postgresql)
//? structured query language
//? here data is stored in tables
//? rows and cols
//? RDBMS: relational

//~ NoSQL
//? not only structured query language
//? here data is stored in format which is -->  document({key:value}), key-value, graph, wide col
//? non RDBMS

//! sample data --> name, age, id

//! if i want to insert the data in sql dbs,
//? 1) database(dbName)
//? 2) table (tableName) --> name(varchar), age(int), id(int)
//? 3) insert data
//~ e1 ==> varun, 34, 123
//~ e2 ==> ashwin, null, 123
//~ e2 ==> sri, 23, 123, sri@gmail.com (not possible)

//! because the schema is predefined/static

//! 1) sql dbs are used when the relation between data is the first priority

//! if i want to insert the data in no-sql dbs,
//? 1) database(dbName)
//? 2) collection(documents) --> name
//? 3) insert data
//~ e1 ==> name--> varun, age--> 34, id--> 123
//~ e2 ==> name--> ashwin, id-->  123
//~ e2 ==> sri, 23, 123, sri@gmail.com , 899080918, sal, .........

//! because the schema is dynamic
//! 1) no-sql dbs are used when the priority is storing/handling large amount of data

//! 4 types of no-sql databases

//? 1) document based --> in this, data is inserted in form of javascript like objects(BSON)
// example
let user1 = {
  name: "varun",
  age: 34,
  email: "v@gmail.com",
  skills: ["html", "css"],
};

let user2 = {
  name: "ashwin",
  age: 23,
  email: "a@gmail.com",
  skills: ["html", "css"],
};

//? 2) key-value pair --> in this, data is stored in form of key-value pair and each key-value pair is a separate entity.
//!  example
// "user1:u@gmail.com" : "data"
//~ used in --> rate-limiting (ip address), caching(storing the data somewhere from winch accessing the data can be faster) (they are in-memory databases --> RAM)  example --> redisDB

//? 3) graph database --> data is stored in the nodes and different nodes are connected with the help of edges , example --> neo4j (used in social media applications)

//? 4) wide column database/ columnar database --> data is getting stored in form of rows and columns, example --> cassendraDB (used for ai model training, (used in analytics))
//TODO:

//~ difference between sql and no-sql databases

//! sql
//? 1) it is static in nature, here structure is predefine
//? 2) also known as RDBMS
//? 3) here data is stored in for form of tables (rows and cols)
//? 4) it is used when relation between data is the first priority
//? 5) using sql dbs, writing complex queries is easy (join, nested queries)
//? 6) it supports vertical scaling
//? 7) examples --> mysql, postgresql, etc....
//? 8) data rollback is possible

//! no-sql
//? 1) it is dynamic in nature, here structure is not predefined (be default the structure is not defined )
//? 2) also known as nonRDBMS
//? 3) here data is stored in form of documents, key-value pair, graphs, wide columns
//? 4) it is used when the priority is storing/handling large amount of data
//? 5)  using no-sql dbs, writing complex queries is hard (join, nested queries) (complex)
//? 6) it supports horizontal scaling
//? 7) examples --> mongoDB, cassendraDB, neo4j, redisDB, etc...
//? 8) data rollback is not possible ()

db.emp.aggregate([
  {
    $match: {
      name: {
        $regex: /a/,
      },
    },
  },
  {
    $lookup: {
      from: "dept",
      localField: "deptNo",
      foreignField: "deptNo",
      as: "deptNo",
    },
  },
  {
    $unwind: {
      path: "$deptNo",
    },
  },
  {
    $group: {
      _id: "$job",
      count: {
        $sum: 1,
      },
      deptDetails: {
        $addToSet: "$deptNo",
      },
    },
  },
  {
    $unwind: {
      path: "$deptDetails",
    },
  },
  {
    $project: {
      count: 1,
      job: "$_id",
      _id: 0,
      facilities: "$deptDetails.facilities",
      location: "$deptDetails.loc",
    },
  },
]);

//! scaling --> it is a process of altering the specs(RAM, Disk) of the system
let myLaptop = {
  RAM: 8,
  Disk: 512,
};
//? movies, series, games, etc... (left RAM-512mb, disk-1GB)
//? i need to add more data

//! 1) delete existing application and data (this is not allowed)

//! 2) increase the specs (vertical scaling) : in this, new resources are added to the existing system
let myLaptopUpgraded = {
  RAM: 16,
  Disk: 1024,
};

//! 3) buy a new laptop (horizontal scaling): in this, new resources are added with the existing system
let myNewLaptop = {
  RAM: 8,
  Disk: 512,
};

//! highly available and distributed
//! 60k --> 60k (16, 1024)
//! 60k --> 30k (8, 512), 30k (8, 512)

//!@ used in AirBnB, uber, netflix, linkedin, etc...

//~ ============================== MONGODB ====================================

//? 25 days (basics(compass, mongod server, mongosh), CRUD (commands), operators, aggregation, indexing)
//! theory --> (replication, sharding) // system design

//! mongodb --> it is nosql database which stores data in BSON format. it is dynamic in nature (by default there is no schema). it is open source, cross-platform.
// geoJSON

//! 1) community(mongodb) server --> it is a mongodb server, through which we can interact with database, by default it's port number is 27107, complete address will be
//~  mongodb://localhost:27017/ ==> domain name
//~  mongodb://127.0.0.1:27017/ ==>  ip address

//? steps to install it --> all default options >> select complete >> install

//! 2) compass --> it is GUI (graphical User interface), through which we can interact(CRUD) with database visually without writing any commands (or knowledge of mongodb commands)
//? while adding documents using compass, pass the input in JSON format

//! 3) mongo shell --> CLI (command line interface) (terminal) (through which we can interact(CRUD) with database by typing mongodb commands. it is built using javascript.(js objects, j)

//? to tap into the shell, open terminal and type "mongosh" and press enter
//? to exit the shell press ctrl + c, or .exit

//! top start mongodb server, open as admin, and type "net start mongodb"
//! to stop mongodb server, open as admin, and type "net stop mongodb"

//! the default database name is test

//~  ======================= mongodb shell commands ========================

//? 1) to display all the databases
// show dbs
// show databases

//? 2) to create a database
// use database_name
//& example -->  use college

//& new databases --> temporary it gets stored in storage engine(wired tiger)
// a) create a new collection
// b) insert a document

//? 3) to create a collection
// db.createCollection("collection_name")
//& example --> db.createCollection("professors")

//! after every op, refresh the compass to see the changes

// datatype of db --> object (createCollection)

//? 4) to show all the collections in a database
// show collections
// show tables : this was introduces just to make developers familiar with the show collections command,

//? 5) to rename a collection
// db.collection_name.renameCollection("new_name")
db.professors.renameCollection("teachers");

//! we cannot rename the database

let db = {
  createCollection: function () {},
  dropDatabase: function () {},
  professors: {
    renameCollection: function () {},
    drop: function () {},
  },
};

//? 6) to delete a collection
// db.collection_name.drop()
db.teachers.drop();

//? 7) to delete a database
// db.dropDatabase()
//& example --> db.dropDatabase()

//~ ===========================================================================
//~ ====================== CRUD on documents =====================================
//~ ===========================================================================

//? 8) to insert a single document  --> {} (insertOne())
db.collection_name.insertOne({ doc }); //? {}
// --> js objects, json data
//! database >> collection >> documents
db.books.insertOne({
  name: "The Alchemist",
  author: "Paulo",
  genre: "Novel",
  rating: 4.5,
  price: 19.99,
});

//! shell is built on js

db.books.insertOne({
  name: "Harry Potter",
  author: "jk rowling",
  genre: "Novel",
  rating: 4.5,
  price: 19.99,
});

db.books.insertOne({
  name: "The Lord of the Rings",
  author: "Tolkien",
  genre: "Novel",
  rating: 4.5,
  price: 19.99,
  publishedDate: new Date(),
  publisher: undefined,
});

let resp = {
  acknowledged: true, //? getting confirmation from db, that data is saved
  insertedId: ObjectId("696a01dc71d8ede22a735189"),
};

//! BSON --> bson stands for binary json (binary javascript object notation)
//? 1) in this, the data is stored in binary format.
//? 2) mongodb uses bson to store data (conversion done by mongo-driver).
//? 3) it is not human readable.
//? 4) bson supports various other datatypes like date, functions, undefined and along with that some other data types like ObjectId.

//! ObjectId --> this is a 12 bytes hexadecimal string of type ObjectId.
//? 1) it is unique for each document
//? 2) whenever a new document is inserted, mongodb automatically assigns and _id to that document, unless we explicitly assign _id to that document.
//? 3) also acts as a unique identifier
//? 4) _id is immutable

//! this _id is divided into three parts (4,5,3)
//? 1) first 4 bytes --> (timestamp), it stores the the time at which the document is inserted
//? 2) next 5 bytes --> PUI (process unique identifier) ==> (2)process id + (3)machine id
//? 3) last 3 bytes --> counter, starts at random value and increments by 1 for each document inserted

db.books.insertOne({
  name: "the child",
  author: "james",
  genre: "triller",
  rating: 4.5,
  price: 19.99,
  _id: "123456789",
});

db.books.insertOne({
  name: "the child 2",
  author: "james",
  genre: "triller",
  rating: 4.5,
  price: 19.99,
  _id: 123456789,
});

//? 8) to insert multiple documents  --> (insertMany([]))
// db.collection_name.insertMany([{doc1}, {doc2}, {doc3}, ...]);
db.books.insertMany(
  { name: "the killing", author: "lee-child" }, // book1
  { name: "the savings", author: "randomName" }, // book2
);

//? 8) to fetch/read single document  --> findOne(): this will return the first matched document
db.collection_name.findOne({ filterCondition }, { projection }, { options });
// all the arguments are not mandatory
//& 1) {filterCondition} ==> here we pass the condition on which we need to filter out the documents
//& 2) {projection} ==> using projection, we can display/hide fields in the output. while using projection, _id will displayed by default
// display ==> { fieldName: 1 }
// hide ==> { fieldName: 0 }

// display the details of user whose name is "smith"
db.books.findOne({ key: "value" });
db.books.findOne({ genre: "thriller" });
db.books.findOne({ name: "the killing" });

db.books.findOne({}); // when no conditions are passed, the first document is fetched
db.books.findOne();

//! mongodb is case sensitive

db.sampleData.insertMany([
  { name: "ashwin", age: 34, sal: 340000, gender: "m" },
  { name: "ashwini", age: 33, sal: 440000, gender: "f" },
  { name: "sri", age: 31, sal: 300000, gender: "m" },
  { name: "sirisha", age: 35, sal: 390000, gender: "f" },
]);

db.sampleData.findOne({ name: "ashwini" });
db.sampleData.findOne(
  { gender: "f" }, // filter
  { name: 1, _id: 0, age: 1 }, // projection
);

//? 8) to fetch/read multiple documents  --> find(): it returns an array of matched documents
db.collection_name.find({ filterCondition }, { projection }, { options });

/// display the names and sal of all the male employees
db.sampleData.find({ gender: "m" }, { name: 1, sal: 1, _id: 0 });

db.sampleData.find({}); // when no conditions are passed, all the documents are fetched
db.sampleData.find();

//! ============ NOTE: ========================= find() returns a cursor(pointer) --> object
//TODO:

//? 9) to delete a single document  --> deleteOne(): this will delete the first matched document
db.collection_name.deleteOne({ filterCondition }); // in this, the first matched document is deleted

db.collection_name.deleteOne({}); // when no conditions are passed, the first document is deleted
db.collection_name.deleteOne(); // this will give an error

db.sampleData.deleteOne({ gender: "m" });

//? 9) to delete multiple documents  --> deleteMany(): this will delete all the matched document
db.collection_name.deleteMany({ filterCondition });

db.collection_name.deleteMany({}); // all the documents will be deleted

//? 9) to update a single document  --> updateOne(): this will update the first matched document
db.collection_name.updateOne({ filter }, { updation_value }, { options });

db.collection_name.updateOne({}, { updation_value }, { options }); //first document in the collection will be updated

//? 10) to update multiple documents  --> updateMany(): this will update all the matched documents
db.collection_name.updateMany({ filter }, { updation_value }, { options });

db.collection_name.updateMany({}, { updation_value }, { options }); // all will be updated

db.books.updateOne({ author: "james" }, { $set: { price: 25 } });

//! ======================== operators ================================
//! Operators ==> all operators in mongodb starts with "$"
//~ query operators: used in filter object
//? ==> comparison operators (less than, not equals to, etc.)
//? ==> logical operators (logical AND, logical OR, etc..)
//? ==> array operators (size, all, elemMatch, etc..)
//? ==> element operators (exists, type, etc..)
//? ==> evaluation operators (regex, expr, etc..)
//~ update operators
//? ==> field update op (set, unset, etc..)
//? ==> arithmetic update op (max, min, inc, etc..)
//? ==> array update op (push, pull, etc..)
//~ aggregation operators
//? ==> pipeline stages op (match, group, etc..)
//? ==> accumulator op (max, min, avg, count, sum)
//? ==> arithmetic and date op (add, subtract, date, etc..)
//~ projection operators ($, $slice, etc..)
//~ geospatial operators ==> (GeoJSON format)
//! indexing, replication, sharding (theory)

//~ ========================================================================
//! operators --> these are reserved symbols which are used to perform specific operations
// operands --> these are the values which are used to perform the operations
// 2 + 3 --> operator is (+), operands are (2, 3)

//~! 1) comparison op
// less than =============================== $lt
// less than or equal to =================== $lte
// greater than or equal to ================ $gte
// greater than ============================ $gt
// equals to =============================== $eq
// not equals to =========================== $ne

//? syntax for above 6 op
//? filter object ====> { fieldName: {$op: value} }

// in ====================================== $in
// not in ================================== $nin
//? syntax for above 6 op
//? filter object ====> { fieldName: {$in: ["v1", "v2", "v3",.....]} }
//~ $in: will fetch all the documents, which will match any one of the given values
//~ $nin: will fetch all the documents, which fails to fulfill any one of the given values

// //& get the details of all the emp whose age is less than 32
// db.sampleData.find({ age: { $lt: 32 } }); // 32 is not included
// db.sampleData.find({ age: { $lte: 32 } }); // 32 is included

// db.sampleData.find({ name: { $ne: "sri" } });

//============26/01/2026=================