const { ApolloServer } = require("apollo-server");
const { animals, mainCards, categories } = require("./db");
const { typeDefs } = require("./schema");
const { Animal } = require("./resolvers/Animal");
const { Category } = require("./resolvers/Category");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Animal,
    Category,
    Mutation
  },
  context: {
    animals, 
    mainCards,
    categories,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
