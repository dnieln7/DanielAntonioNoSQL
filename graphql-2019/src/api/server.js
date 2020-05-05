const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('../database/mongo/resolvers');
const {product, seller} = require('../database/postgres/models');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection to mongoDB was successful');
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        return {product, seller};
    }
});

server.listen({port: 1444}).then(({url}) => {
    console.log("Server is running on " + url + "!")
});

