# TypeScript E2E GraphQL to Cosmos DB Static web app

This sample uses an Azure Static web app (React client and an Azure Function API) to request data with a GraphQL query to the API. The API translates the query to a Cosmos DB SQL query then returns that data to the client. This sample uses the [Apollo GraphQL](https://github.com/apollographql) open source tools.

This sample is based on Aaron Powell's [Type-safe GraphQL apps with TypeScript workshop](https://github.com/aaronpowell/graphql-typescript-workshop.git), hosted on GitHub in a separate repository. You can also read his [blog series on GraphQL](https://www.aaron-powell.com/posts/2020-07-13-graphql-on-azure-part-1-getting-started/).

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
9. Open a browser to `http://localhost:3000` to view the React client.

### Running the game

* The game provides a series of trivia questions for a player then displays the player's score. 
* A player's name doesn't have to be unique. Games across the same player are not tracked.
* All trivia questions come from `./api/trivia.json` which is a subset of questions available from [Open Trivia Database](https://opentdb.com/).