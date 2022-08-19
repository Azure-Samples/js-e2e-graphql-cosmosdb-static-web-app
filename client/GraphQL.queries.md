# List of games

```
query { 
  games {
  	id, 
    state, 
    players {
      id, 
      name
    }
	} 
}
```

# List of questions

1. Update `./api/api/graphql/schema.graphql` with new query to Query type:

  ```
  type Query {
    game(id: ID!): Game
    games: [Game!]!
    playerResults(gameId: ID!, playerId: ID!): [PlayerResult!]!
    questions: [Question]
  }
  ```

1. Add the following code to `/api/graphql/resolvers.ts`.

  ```javascript
      questions(_, __, { dataSources }) {
        return dataSources.question.getQuestions();
      }, 
  ```

1. Query for questions in playground

  ```
  query { 
    questions {
      id, 
      question, 
      correctAnswer, 
      answers 
    } 
  }
  ```
