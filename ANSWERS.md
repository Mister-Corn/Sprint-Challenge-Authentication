<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware is basically any function that has access to the `req` and `res` objects. It's kinda like a conveyor belt, with these two objects on the belt, being examined and modified by different functions, until a function formulates a response with the `res` object and sends it back to the user (*or it falls off the conveyor belt and onto the floor if no function does such a thing*).

Sessions is a way to remember the authentication state of clients. Again, *HTTP requests are stateless*, so each request between the client and the server is like a brand new request each time, with nothing linking the requests together. Sessions are a way for the server to remember something about the client between requests. The session is stored in the server, either in memory or in a DB, and the server retrieves the session whenever a client identifies itself with that session, like with a cookie with the projects we did this week.

JWT is another way to do authentication. Instead of remembering the authentication state of a client on the server, you issue a **JSON Web Token** (*JWT*) to the client upon successful login. Everytime the client makes a request to a protected resource, the client sends the token, and the server validates the token to verify client has access.

2.  What does bcrypt do in order to prevent attacks?

`bcrypt`, as we used it this week, is used to generate and compare hashes. We do this because **storing passwords directly is a big NO-NO**. If an attacker gains access to our database and we store the passwords as plaintext, the attacker will know exactly what the passwords are and either use them to log in to our api, or try using the passwords elsewhere on the internet, like banking websites. 

Instead, we take the password and generate a `hash`, a one-way conversion of plaintext to ciphered gibberish. It's the hash that is stored on the database. When a client logs in, the password they inputted is also hashed and then compared to the hash that is on the database. If it matches, their inputted password is correct, and we log them in.

3.  What are the three parts of the JSON Web Token?

The three parts are:

* `header`: contains general information about the token, such as algorithms used to generate it.
* `payload`: contains data we want to store in the token. In projects this week, we stored a user's name within it.
* `secret`: the key used to encrypt and decrypt the token. The client, or anyone else but the server, should know this. It will be used by the server to generate and validiate the token.
