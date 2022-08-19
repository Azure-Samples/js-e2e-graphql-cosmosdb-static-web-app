# Apollo serverless API

This serverless API uses the Apollo server with either an in-memory datasource or the CosmosDB datasource for Core (SQL) API. 

# Install

1. Install API dependencies

    ```
    npm install
    ```

1. For Windows only, [download, install, and start Azure Cosmos DB emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator?tabs=ssl-netstd21#download-the-emulator) if you intend to use Cosmos DB.

1. Start local storage:

    ```
    npm run local-storage
    ```

1. Start the local API function

    ```
    npm start
    ```

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

## Sample queries

These queries should work in the Apollo sandbox if run in order. 

### Start the trivia game

Create a game with a random gameId variable such as "xder".

```
mutation CreateGame {
  createGame {
    id
    state
    players {
      id
      name
    }
    questions {
      id
      question
      correctAnswer
      answers
    }
  }
}
```

Response

```{
  "data": {
    "createGame": {
      "id": "dfvm",
      "state": "WaitingForPlayers",
      "players": [],
      "questions": [
        {
          "id": "30",
          "question": "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
          "correctAnswer": "Motorola 68000",
          "answers": [
            "Intel 8088",
            "Yamaha YM2612",
            "Motorola 68000",
            "Zilog Z80"
          ]
        },
        ... remaining questions removed for brevity
      ]
    }
  }
}
```

### Get specific game

Query for game with gameId such as "pcwf".

```
query Query($gameId: ID!) {
  game(id: $gameId) {
    id
    state
    players {
      id
      name
      
    }
    questions {
      id
      question
      correctAnswer
      answers
    }
  }
}
```

Returns a response such as 

```
{
  "data": {
    "game": {
      "id": "pcwf",
      "state": "Started",
      "players": [
        {
          "id": "ukxh",
          "name": "dina"
        }
      ],
      "questions": [
        {
          "id": "35",
          "question": "The C programming language was created by this American computer scientist. ",
          "correctAnswer": "Dennis Ritchie",
          "answers": [
            "Tim Berners Lee",
            "Willis Ware",
            "al-Khwārizmī",
            "Dennis Ritchie"
          ]
        },
        ... remaining questions removed for brevity
      ]
    }
  }
}
```