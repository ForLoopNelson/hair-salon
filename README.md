# Hair Salon Template

This is a React site template with functional routing and appointment booking using React, Vite, Node, and MongoDB. Note that the project contains a separate Client and Server.
Installation

    Install the Server packages in the root directory.

cd hair_salon
npm i

    In the root, create a .env file and insert your MongoDB connection string as a variable.

mkdir .env

MONGODB_URI=`mongodb+srv://...`

Note: check the server.js file and edit mongoose.connect to import your FULL connection string. For educational purposes, it currently only imports the password. I would suggest replacing the whole thing with an environment variable.

mongoose.connect(MONGODB_URI)

    Install the Client packages in the Client directory.

cd client
npm i

    Start the server.

cd ..
node server.js

    Look for the success message.

Server is running on port 5000
Connected to MongoDB

    Start the client.

cd client
npm run dev

Usage
This template is free for unlimited use by anyone for personal or business purposes. Tag me on Twitter @mayanwolfe if you build something cool!
