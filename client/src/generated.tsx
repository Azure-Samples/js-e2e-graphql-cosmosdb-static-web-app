import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Game = {
  __typename?: "Game";
  id: Scalars["ID"];
  players: Array<Player>;
  questions: Array<Question>;
  state?: Maybe<GameState>;
};

export enum GameState {
  Completed = "Completed",
  Started = "Started",
  WaitingForPlayers = "WaitingForPlayers",
}

export type Mutation = {
  __typename?: "Mutation";
  addPlayerToGame: Player;
  createGame?: Maybe<Game>;
  startGame?: Maybe<Game>;
  submitAnswer?: Maybe<Player>;
};

export type MutationAddPlayerToGameArgs = {
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type MutationStartGameArgs = {
  id: Scalars["ID"];
};

export type MutationSubmitAnswerArgs = {
  answer: Scalars["String"];
  gameId: Scalars["ID"];
  playerId: Scalars["ID"];
  questionId: Scalars["ID"];
};

export type Player = {
  __typename?: "Player";
  game: Game;
  games: Array<Game>;
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type PlayerGameArgs = {
  gameId?: InputMaybe<Scalars["ID"]>;
};

export type PlayerResult = {
  __typename?: "PlayerResult";
  answers: Array<Scalars["String"]>;
  correct?: Maybe<Scalars["Boolean"]>;
  correctAnswer: Scalars["String"];
  name: Scalars["String"];
  question: Scalars["String"];
  submittedAnswer: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  game?: Maybe<Game>;
  games: Array<Game>;
  playerResults: Array<PlayerResult>;
  questionsOrdered: Array<Question>;
};

export type QueryGameArgs = {
  id: Scalars["ID"];
};

export type QueryPlayerResultsArgs = {
  gameId: Scalars["ID"];
  playerId: Scalars["ID"];
};

export type Question = {
  __typename?: "Question";
  answers: Array<Scalars["String"]>;
  correctAnswer: Scalars["String"];
  id: Scalars["ID"];
  question: Scalars["String"];
};

export type AddPlayerScreenMutationVariables = Exact<{
  id: Scalars["ID"];
  name: Scalars["String"];
}>;

export type AddPlayerScreenMutation = {
  __typename?: "Mutation";
  addPlayerToGame: { __typename?: "Player"; id: string };
  startGame?: {
    __typename?: "Game";
    id: string;
    players: Array<{ __typename?: "Player"; id: string; name: string }>;
  } | null;
};

export type SubmitAnswerMutationVariables = Exact<{
  gameId: Scalars["ID"];
  playerId: Scalars["ID"];
  questionId: Scalars["ID"];
  answer: Scalars["String"];
}>;

export type SubmitAnswerMutation = {
  __typename?: "Mutation";
  submitAnswer?: { __typename?: "Player"; id: string } | null;
};

export type CreateGameMutationVariables = Exact<{ [key: string]: never }>;

export type CreateGameMutation = {
  __typename?: "Mutation";
  createGame?: { __typename?: "Game"; id: string } | null;
};

export type PlayerResultsQueryVariables = Exact<{
  gameId: Scalars["ID"];
  playerId: Scalars["ID"];
}>;

export type PlayerResultsQuery = {
  __typename?: "Query";
  playerResults: Array<{
    __typename?: "PlayerResult";
    correct?: boolean | null;
    question: string;
    answers: Array<string>;
    correctAnswer: string;
    submittedAnswer: string;
  }>;
};

export type GetGameQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetGameQuery = {
  __typename?: "Query";
  game?: {
    __typename?: "Game";
    questions: Array<{
      __typename?: "Question";
      id: string;
      question: string;
      answers: Array<string>;
    }>;
  } | null;
};

export const AddPlayerScreenDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addPlayerScreen" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addPlayerToGame" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "startGame" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "players" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddPlayerScreenMutation,
  AddPlayerScreenMutationVariables
>;
export const SubmitAnswerDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "submitAnswer" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "gameId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "playerId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "questionId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "answer" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "submitAnswer" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gameId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "gameId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "playerId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "playerId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "questionId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "questionId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "answer" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "answer" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SubmitAnswerMutation,
  SubmitAnswerMutationVariables
>;
export const CreateGameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateGame" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createGame" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateGameMutation, CreateGameMutationVariables>;
export const PlayerResultsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "playerResults" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "gameId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "playerId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "playerResults" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "gameId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "gameId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "playerId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "playerId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "correct" } },
                { kind: "Field", name: { kind: "Name", value: "question" } },
                { kind: "Field", name: { kind: "Name", value: "answers" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "correctAnswer" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "submittedAnswer" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PlayerResultsQuery, PlayerResultsQueryVariables>;
export const GetGameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getGame" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "game" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "questions" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "question" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "answers" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetGameQuery, GetGameQueryVariables>;
