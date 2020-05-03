const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const schema = require('./schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/graphql', {useMongoClient: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection to mongoDB was successful')
});

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

// Start the server
app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});
