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

1. Add the following code to `/api/graphql/resolvers.ts`.

```javascript
    questions(_, __, { dataSources }) {
      return dataSources.question.getQuestions();
    }, 
```

2. Query for questions in playground

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
