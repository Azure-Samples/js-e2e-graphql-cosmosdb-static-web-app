---
page_type: sample
languages:
- javascript
- typescript
- nodejs
name: "TypeScript E2E GraphQL to Cosmos DB Static web app"
description: "This sample uses an Azure Static web app (React client and an Azure Function API) to request data with a GraphQL query to the API. The API translates the query to a Cosmos DB SQL query then returns that data to the client. This sample uses the [Apollo GraphQL](https://github.com/apollographql) open source tools."
products:
- azure
- static-web-apps
- azure-functions
- azure-portal
- vs-code
- azure-cosmos-db
---

# TypeScript E2E GraphQL to Cosmos DB Static web app

This sample uses an Azure Static web app (React client and an Azure Function API) to request data with a GraphQL query to the API. The API translates the query to a Cosmos DB SQL query then returns that data to the client. This sample uses the [Apollo GraphQL](https://github.com/apollographql) open source tools.

This sample is based on Aaron Powell's [Type-safe GraphQL apps with TypeScript workshop](https://github.com/aaronpowell/graphql-typescript-workshop.git), hosted on GitHub in a separate repository. You can also read his [blog series on GraphQL](https://www.aaron-powell.com/posts/2020-07-13-graphql-on-azure-part-1-getting-started/) or watch his YouTube video - [Type-safe GraphQL with TypeScript](https://www.youtube.com/watch?v=G2HUgV30EG4).

## Features

This provides the following features:

* Trivia game: game, player, questions
* [Azure Function API](https://docs.microsoft.com/en-us/azure/azure-functions/) using GraphQL schema and generated types for both the API and client
* [Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/) SQL database for storing game data
* [Azure Static web app](https://docs.microsoft.com/en-us/azure/static-web-apps/) for hosting client and Azure Function API

## Getting Started

### Prerequisites

- Node.js 14+
- Azure resources: Azure Static web app, Azure Cosmos DB

### Quickstart

1. In a bash terminal, run the command `git clone https://github.com/Azure-Samples/js-e2e-graphql-cosmosdb-static-web-app.git`.
2. In a bash terminal, run the command `cd js-e2e-graphql-cosmosdb-static-web-app` and open the project with VS Code with the commend `code .`.
3. In the VS Code integrated terminal, run the command `npm install && cd api && npm install` to install npm dependencies.
4. Use the Azure portal to create a new [Azure Cosmos DB](https://ms.portal.azure.com/#create/Microsoft.DocumentDB) resource, with a new database named `trivia` and a new collection named `game` with a partition key named `modelType`. 
5. In the Azure portal for your new Cosmos DB resource, use the **Data Explorer** to import the `./api/trivia.json` file into the game collection.
6. In the Azure portal for your new Cosmos DB resource, use the **Keys** page to find and copy your **Primary connection string**.
7. In VS Code, configure `./api/local.settings.json` with the Cosmos DB connection string.

    ```json
    {
        "IsEncrypted": false,
        "Values": {
            "FUNCTIONS_WORKER_RUNTIME": "node",
            "AzureWebJobsStorage": "",
            "CosmosDB": "AccountEndpoint=https://..."
        }
    }
    ```

8. In VS Code, select to run and debug `Run full stack`.

    Part of running the full stack is to generate the following files to support the graphql schema and typescript types:
    - `./api/graphql.schema.json`
    - `./api/graphql/generated.ts`
    - `./src/generated.tsx`: TypeScript source file for the API GraphQL schema

9. Open a browser to `http://localhost:3000` to view the React client.

### Running the game

* The game provides a series of trivia questions for a player then displays the player's score. 
* A player's name doesn't have to be unique. Games across the same player are not tracked.
* All trivia questions come from `./api/trivia.json` which is a subset of questions available from [Open Trivia Database](https://opentdb.com/).

### Using the in-memory database

If you would rather use the in-memory database, change the `./api/index.ts` file to use the **inMemoryDataSources**:

Change this:

```javascript
const server = new ApolloServer({
  schema: addResolversToSchema({ schema, resolvers }),
  dataSources: cosmosDataSources,
  context: {},
});
```

To this:

```javascript
const server = new ApolloServer({
  schema: addResolversToSchema({ schema, resolvers }),
  dataSources: inMemoryDataSources,
  context: {},
});
```

## Troubleshooting

|Error|Reason|
|---|---|
|Browser-displayed runtime error when you try to create game: `Unexpected token P in JSON at position 0`|Verify the Azure Function API is running on port 7071. If you started the Azure Function API, wait a couple of minutes and try again.|
|Browser-displayed runtime error when you try to create game:`Error: Response not successful: Received status code 500 - CosmosDB connection string not found`|The Cosmos DB connection string isn't found in the running API.| 
|Browser-displayed runtime error when you try to create game:`Error: Owner resource does not exist`|The Cosmos DB resource doesn't have the trivia container created.|
|Browser-displayed runtime error when you try to create game:`Error: Owner resource does not exist`|The Cosmos DB resource doesn't have the `trivia` container (database).|
|Browser-displayed runtime error when you try to create game:`Error: Resource Not Found`|The Cosmos DB resource doesn't have the `game` collection in the `trivia` container (database).|
|Browser-displayed runtime error when you play the game: `Error: No game trivia questions found`|The trivia.json file has not been loaded into the `game` collection in the Cosmos DB resource.|
