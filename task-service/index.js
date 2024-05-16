const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const fs = require('fs'); // Importez le module de système de fichiers si nécessaire
const typeDefs = fs.readFileSync('./schema.graphql', 'utf8'); // Chargez le schéma GraphQL à partir du fichier
const resolvers = require('./resolvers'); 

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

// Appel de server.start() avant server.applyMiddleware()
async function startApolloServer() {
    await server.start();
    server.applyMiddleware({ app });
}

startApolloServer().then(() => {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(error => {
    console.error('Failed to start Apollo Server:', error);
});
