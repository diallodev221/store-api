# Store API Project
This is a simple project for a store API using Node.js and Mongoose. The API provides basic functionalities such as creating, updating, deleting and fetching data related to stores.

## Installation
1. Clone the repository.
2. Install the required packages using `npm install`.
3. Create a `.env` file in the root directory with the following environment variables:

```
PORT=3000
MONGODB_URI=<your-mongodb-uri>
```
4. Run the application using `npm start`.

## Dependencies
- `express` - A web framework for Node.js
- `mongoose` - A MongoDB object modeling tool designed to work in an asynchronous environment
- `dotenv` - A zero-dependency module that loads environment variables from a `.env` file into `process.env`

- `express-async-errors` This library is about what happens when you hit an error.