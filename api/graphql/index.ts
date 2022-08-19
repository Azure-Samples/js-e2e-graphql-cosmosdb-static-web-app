import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server-azure-functions";
import { join } from "path";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cosmosDataSources, inMemoryDataSources } from "./data/index";
import resolvers from "./resolvers";

let dataSources:any = inMemoryDataSources;

if(process.env.CosmosDB){
  console.log("using Cosmos DB");
  dataSources = cosmosDataSources
} else {
  console.log("using in-memory DB");
}

const schema = loadSchemaSync(
  join(__dirname, "..", "..", "graphql", "schema.graphql"),
  {
    loaders: [new GraphQLFileLoader()],
  }
);

const server = new ApolloServer({
  schema: addResolversToSchema({ schema, resolvers }),
  dataSources,
  context: {},
});

export default server.createHandler({
  cors: {
    origin: ['*', "https://studio.apollographql.com"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["access-control-allow-credentials", "access-control-allow-origin", "content-type"]
  },
});
