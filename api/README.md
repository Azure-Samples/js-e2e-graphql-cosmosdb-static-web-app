# Apollo serverless API

This serverless API uses the Apollo server with either an in-memory datasource or the CosmosDB datasource for Core (SQL) API. 

## Trivia game data

* Install the [trivia.json](./trivia.json) data into your Cosmos DB for Core (SQL) API data resource.
* Create a database and collection using the following details:

    |Setting|Value|
    |--|--|
    |Database ID|`trivia`|
    |Container ID|`game`|
    |Partition key|`modelType`|

## Cosmos DB emulator

* For local development, install and use the [Cosmos DB emulator](https://aka.ms/cosmosdb-emulator). 