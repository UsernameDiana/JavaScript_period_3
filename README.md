# JavaScript_period_3
MEAN application with NoSQL, MongoDB, Mongoose and ExpressJS


#### Explain, generally, what is meant by a NoSQL database.
Its an umbrella of new databases, that don't use single SQL schemas. NoSQL won't replace relational DB, just replaces relation DB in some areas, where the DB has to be on different clusters. If there is a large amount of data with a lot of users, NoSQL is meant for that. Stores data in binary JSON.
NoSQL provides mechanism that does not use relations. In Relational DB we had to normalize DB, no redundant data, in NoSQL, we de-normalize.

#### Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.
Pros:
Scales really well horizontal
Simplicity of design and flexible
Support large volumes of data by running well on clusters.
Open source
Schemaless - we don't need to ask CREATE TABLE with keys
Cons:
Does not guarantee ACID - atomic, consistent, isolation, durability

****The CAP theorem states:
It's theoretically impossible to have all 3 requirements met, so a combination of 2 must be chosen and this is usually the deciding factor in what technology is used. 
Consistency
All the servers in the system will have the same data so anyone using the system will get the same copy regardless of which server answers their request.
Availability
The system will always respond to a request (even if it's not the latest data or consistent across the system or just a message saying the system isn't working).
Partition Tolerance
The system continues to operate as a whole even if individual servers fail or can't be reached.

#### Explain how databases like MongoDB and redis would be classified in the NoSQL world.
Redis is a bit like a map, that can map data (session objects), Key-value store, one of the fastest DB. Redis can handle lifetime of an object (we can set it up to 30min or whatever), like session object.
MongoDB is a documentDB, MongoDB stores all data in documents, that are stored in a binary json (BSON). MongoDB documents are composed of field-and-value pairs and have the following structure. It is really fast to fetch data.

#### Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB.
Mongoose is an object modeling tool for MongoDB and Node.js, somehow similar to a ORM tool. Mongoose provides a straight-forward, schema-based solution to modeling your application data. Includes: schemas, type casting (String, boolean, etc), validation, query build-in, domain logic (middleware).
```javascript
var mongoose = require( 'mongoose' ),
....
var userSchema = new mongoose.Schema({
  username: String,
  email: {type: String, unique:true},
  modified : {type: Date, default: Date.now}
});
// Build the User model
  mongoose.model( 'User', userSchema );
           
// Using the model "somewhere"
var mongoose = require( 'mongoose' );
var User = mongoose.model("User");
```
Models are fancy constructors compiled from our Schema definitions. Instances of these models represent documents which can be saved and retrieved from our database. All document creation and retrieval from the database is handled by these models.
```javascript
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);
```
Documents are instances of our model. Creating them and saving to the database is easy

#### Explain, and demonstrate, using relevant examples, the strategy for querying MongoDB (all CRUD operations).
```javascript
//Instert:
db.persons.insert({"name" : "Lars Mortensen", "position" : "Teacher"});
//Find:
db.products.find({email: “me@gmail.com” });
//Update:
db.collection.update( { "_id.name": "Robert Frost", "_id.uid": 0 },
   { "categories": ["poet", "playwright"] },
   { upsert: true } );
//Remove:
db.products.remove({ quantity: { $gt: 20 } },
    { writeConcern: { w: "majority", wtimeout: 5000 } });
```j
#### Explain about indexes in MongoDB, how to create them, and demonstrate how you have used them.
Indexes helps optimizing queries. A 2dsphere index supports queries that calculate geometries on an earth-like sphere (coordinates). 2dsphere index supports all MongoDB geospatial queries: queries for inclusion, intersection and proximity.
You can use it for a mobile app, where you can update a map with all Your friends location online, based on their indexes(using them as 2-D spheres).
```javascript
db.airports.insert({
    "name" : "John F Kennedy",
    "type" : "International",
    "code" : "JFK",
    "loc" : {
      "type" : "Point",
      "coordinates" : [ -73.778889, 40.639722 ]
    }})
```

#### Explain, using your own code examples, how you have used some of MongoDB's "special" indexes like TTL and 2dsphere.
TTL indexes are special single-field indexes that MongoDB can use to automatically remove documents from a collection after a certain amount of time.
Data expiration is useful for certain types of information like machine generated event data, logs, and session information that only need to persist in a database for a finite amount of time.

#### Demonstrate, using a REST-API you have designed, how to perform all CRUD operations on a MongoDB.
REST stands for Representational State Transfer. It is an architecture that allows client-server-communication through a uniform interface. REST is stateless, cacheable.
HTTP RESTful API’s are compose of:
HTTP methods, e.g. GET, PUT, DELETE, POST, …
Base URI, e.g. http://myhomepage.com
URL path, e.g. /api/createuser/
Media type, e.g. html, JSON, XML, Microformats, Atom, Images…


#### Explain the benefits from using Mongoose, and provide an example involving all CRUD operations.
Mongoose is schema less. We can have all sort of fields in a document in a collection:
{ name : “Joe”, age : 30, interests : ‘football’ }
{ name : “Kate”, age : 25 }
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
```javascript
var userSchema = new mongoose.Schema({
  username: String,
  email: {type: String, unique:true},
  created: { type: Date, default: Date.now },
  modified: Date,
});
```
#### Explain the benefits from using Mongoose, and demonstrate, using your own code, an example involving all CRUD operations.

#### Explain how redis "fits" into the NoSQL world, and provide an example of how you have used it.
Redis - putting sessions on another DB, not on the server.

#### Explain, using a relevant example, a full MEAN application (the A, can be an ionic application) including relevant test cases to test the REST-API (not on the production database)
