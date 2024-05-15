const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const { typeDefs, resolvers } = require('./schema');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
