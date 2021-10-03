## Lesson 1 - Liftoff - Creating Project (Annotations 📝)

### Origin and functioning of Node.js

Created by Ryan Dahl in 2009, the need to know the progress of your upload, but always need to make new requests to know the percentage of submission. After researching, Ryan realized that JavaScript accepts asynchronous requests and started developing Node.js.
How it works: Users (client side) make their requests (GET, POST, PUT, DELETE, etc), and the single thread of **event loop** of Node.js receives these requests and delegates them to other available threads , depending on the system, the number of available threads may vary and connect them to a database.
Thus, there is no blocking requests (Non-blocking IO), so we can make multiple simultaneous requests.

### API (Application Programming Interface)

It is a model/pattern that we have our project to separate the system from the client side (HTML, CSS, JavaScript, frameworks, etc) from the server side (business rules, database connection, authentication, etc). Then, we will have the user's requests(_request_) through routes and the server returns a response(_response_) in JSON format.

### Top HTTP Methods

- _GET_ -> select data;
- _POST_ -> register a data;
- _PUT_ -> edit a data;
- _DELETE_ -> deletes a data;
- _PATCH_ -> changes a specific data.

Note: Browsers only support GET or POST methods for some form.

### Basic commands:

#### Initialization and downloading dependencies

- **yarn init -y** -> initialize _package.json_ in your project. _-y_, at the end of the command, registers the name, version, main and license data automatically.
- **yarn tsc --init** -> initialize TS.
- **yarn tsc** -> convert TS to JS for Node.js to execute. Node.js does not understand TypeScript.
- **yarn add typescript -D** -> add TypeScript in development mode, when it goes to production, the code will be converted to JavaScript.
- **yarn add express** -> add the express framework to the project.
- **yarn add @types/express -D** -> downloads the expression types in development mode.
- **yarn add ts-node-dev -D** -> this library converts TS files into JS automatically, so that we don't keep creating files with the _.js_ extension every time we want to run the project.

#### Execution

- **yarn dev** -> A short way to run the server on port 3000. We defined the _dev_ command inside "scripts", in package.json. This property receives the command: _ts-node-dev src/server.ts_. With this configuration, we don't need to type _yarn ts-node-dev src/server.ts_ every time we run the project, just yarn dev, speeding up development.

---

## Lesson 2 - Maximun Speed ​​- Creating user structure (Annotations 📝) <a name="class2"></a>

### Parameter types in requests(GET, POST, PUT, DELETE...)

- **Route params** -> parameters within the route. Ex: http://localhost:3000/livro/**69865498**
- **Query params** -> user filter/search (optional parameter). Ex: http://localhost:3000/jogo**?name=red-dead-redemption&price=100**
- **Body params** -> are sent inside the request body (POST, PUT and PATCH) as an object inside a JSON file.

### Ways to use database in the project:

- Insert a DB driver in the project, but we have to work with SQL code;
- [Knex.js](http://knexjs.org/): is a query builder. We don't need to mess with SQL syntax so much and it has integration with several types of Database (MySQL, SQLite3, Postgres, etc);
- [TypeORM(Object Relational Mapper)](https://typeorm.io/#/): transforms objects from code to entity, so the database understands the syntax.

Note: it is not advisable to use SQLite with the project in production as it is not as robust as other databases.

### Installation

- _yarn add typeorm reflect-metadata sqlite3_ -> download 3 dependencies at once(). _reflect-metadata_ allows us to add the _decorators_(@) to classes and functions, giving them an alias.

### Migrations

It is an SQL code versioning control. Keeps the most recent version of the Database codes, so every team uses the same version. In this project, TypeORM Migrations is used.

- TypeORM Documentation: https://typeorm.io/#/

### Migration Commands:

- _yarn typeorm migration:create -n NameEntity_ -> create an entity file
- _yarn typeorm migration:run_-> register the migration with the SQL data entered
- _yarn typeorm migration:revert_-> remove last migration registered

### Project layers:

- **Entity** -> the entities that will be transferred to the bank are registered
- **Repository** -> responsible for communicating between the entity and the DB.
- **Service** -> the general rules of the project, responsible for authentication, verification, etc.
- **Controller** -> Same as **request, response** methods. In this case, the Controller receives the information from the server and passes it on to the Service layer.

Airfile created _routes.ts_ -> file where the routes that will be passed to the Controller will be.

## Lesson 3 - In Orbit - Creating tag structure(Annotations 📝) <a name="class3"></a>

### Middleware

It intercepts our route, that is, it **checks** to see if the user can continue to his destination by the request he made.
if not, we return a Status Code with the message of why. So we'll use it to handle errors instead of using _try, catch_ all the time.
In the project, we use it for the following case: if the user tries to access the route to create tags without being an admin, the middleware will return a Status Error 401: Unauthourized.

### Functions

#### FindOne

It is a function that selects, in SQL syntax, a parameter. Ex: **SELECT \* FROM tags WHERE name = 'data_past';**

#### NextFunction

An express function will take the user to the requested page if the middleware allows access after verification.

### Commands

- **_yarn add express-async-errors_** -> library to handle asynchronous errors.

Note: We are creating the repository classes, even without using it, so when we use its methods we don't need to do many
changes to the design if we put it on another layer.

## Lesson 4 - Landing - Creating Praise Structure (Annotations 📝) <a name="class4"></a>

### JWT(Json Web Token) - What It Is and How It Works

It's a token pattern where we get the user data by requests (GET, POST, etc), check if the user can be accessing that route and authenticate him. So, instead of using the email and password data all the time, we use the token.
It is **coded** in 3 parts, divided by a dot, classified into:

- **Header** -> token type, algorithm to encrypt data and generate the token;
- **Payload** -> These are properties of user information, such as your id, email, name, etc. So when we pass the data from _back_ to _front_ or vice versa, the data is encrypted on send and decrypted on destination by some library made for that. However, we will not pass on sensitive information such as passwords;
- **Verify Assignature** -> Will create a signature verification by concatenating (joining) the _header_ and _payload_, converting them with base64 and joining them with the key we defined to then validate and generate the token.

### JWT Installation

- **_yarn add jsonwebtoken_** -> install your library
- **_yarn add @types/jsonwebtoken -D_** -> install your types in development environment;

### Cryptography

To encrypt the password, we will use lib(library or library):

- **_yarn add bcryptjs_**
- **_yarn add @types/bcrypt_**

And we'll import your **hash()** method, where we pass the password and the _salt_ which is the encryption size, by default
we use 8. That way, we receive the password and encrypt it before it is saved in the bank. Now the password will not appear in the saved logs.

### Authentication

We will authenticate inside the **Service** layer and we will receive the email and password data. So, we will have 3 steps to do:

- Check if email exists;
- Confirm if the password is correct;
- Generate the authentication token: we will use the _sign_ function from the _jwc_ library, where we pass the _payload_ data and the access key that we put.
  We use the [MD5 Hash Generator](https://www.md5hashgenerator.com/) website for more security. On the website, we type a text that will be converted to an MD5 hash code and SHA1 hash code, so we can choose one of the two to be the key.

_Note_: even if the error is in the email or password, it is good security practice not to respond exactly where the error is. Because if a malicious person is accessing the system, he will know the field where the error is and attack there. So we say that both can be incorrect.

**Tip**: We only use _await_ when a _Promise_ is returned.

---

## Lesson 5 - Surface Exploration - Finishing project (Annotations 📝) <a name="class5"></a>

In the previous class we authenticated the admin, now we will do the same with the user. So we'll use _middleware_ to intercept
the route and verify that the user is really authenticated to go to his destination. Then we will have the following steps:

- Receive the user generated token;
- Validate if the token is filled;
- Check if the token is valid;
- Retrieve user information.

Note: In Imsomnia, we have the _Bearer token_ where we pass the user generated token.

Let's add the _user_id_ as an object that will come from the user's _request_. But in the standard library, we don't have it, TypeScript allows us to overwrite some typefaces, so we'll add this new typeface to a file and folder with the same name as the original lib(library) and add this path to the _typeRoots_ property, which are packages of typing the _tsconfig.json_ file to be able to
recognize this added typing.

We created 4 more routes:

- list of compliments sent -> **/users/compliments/send** (POST method)
- list of and compliments received -> **/users/compliments/send** (POST method)
- list of registered users -> **/users** (GET method)
- list of registered tags -> **/tags** (GET method)

Also ensuring the user is authenticated before going to their destination.

### Functions

- _end()_ -> returns default status response. Ex: response.status(401).end();
- _find()_ -> returns all records.
  _*classToPlain()*_ -> will create new objects from the objects it receives, part of the _class-transformer_ library.

- We can also bring all the information from the list of compliments received and sent with the _relations:["nameObject"]_ after the _where_ property of your Service layer.

Note: we can have routes with the same name if they have different methods.

- ... -> retrieves all data from an object. Ex: {...tag}.

### Customize data

The class-transformer library allows us to customize a class. In our case, we will use it for two cases:

- Customize tag for user, using @Expose;
- Exclude the password column for the user, using @Exclude.
  And, in the end, we will return them using the _classToPlain()_ function that transforms objects of the class into JS objects to be passed in a JSON.

#### Class-transformer installation

- **_yarn add class-transformer_**
