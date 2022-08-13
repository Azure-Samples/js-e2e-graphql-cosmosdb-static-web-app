import { GraphQLResolveInfo } from "graphql";
import { QuestionModel, GameModel, UserModel } from "./data/types";
import { ApolloContext } from "./apolloContext";
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Game: ResolverTypeWrapper<GameModel>;
  GameState: GameState;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Player: ResolverTypeWrapper<UserModel>;
  PlayerResult: ResolverTypeWrapper<PlayerResult>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<QuestionModel>;
  String: ResolverTypeWrapper<Scalars["String"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  Game: GameModel;
  ID: Scalars["ID"];
  Mutation: {};
  Player: UserModel;
  PlayerResult: PlayerResult;
  Query: {};
  Question: QuestionModel;
  String: Scalars["String"];
};

export type GameResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Game"] = ResolversParentTypes["Game"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes["Player"]>, ParentType, ContextType>;
  questions?: Resolver<
    Array<ResolversTypes["Question"]>,
    ParentType,
    ContextType
  >;
  state?: Resolver<Maybe<ResolversTypes["GameState"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  addPlayerToGame?: Resolver<
    ResolversTypes["Player"],
    ParentType,
    ContextType,
    RequireFields<MutationAddPlayerToGameArgs, "id" | "name">
  >;
  createGame?: Resolver<Maybe<ResolversTypes["Game"]>, ParentType, ContextType>;
  startGame?: Resolver<
    Maybe<ResolversTypes["Game"]>,
    ParentType,
    ContextType,
    RequireFields<MutationStartGameArgs, "id">
  >;
  submitAnswer?: Resolver<
    Maybe<ResolversTypes["Player"]>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSubmitAnswerArgs,
      "answer" | "gameId" | "playerId" | "questionId"
    >
  >;
};

export type PlayerResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Player"] = ResolversParentTypes["Player"]
> = {
  game?: Resolver<
    ResolversTypes["Game"],
    ParentType,
    ContextType,
    Partial<PlayerGameArgs>
  >;
  games?: Resolver<Array<ResolversTypes["Game"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResultResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["PlayerResult"] = ResolversParentTypes["PlayerResult"]
> = {
  answers?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  correct?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  correctAnswer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  question?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  submittedAnswer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  game?: Resolver<
    Maybe<ResolversTypes["Game"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGameArgs, "id">
  >;
  games?: Resolver<Array<ResolversTypes["Game"]>, ParentType, ContextType>;
  playerResults?: Resolver<
    Array<ResolversTypes["PlayerResult"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPlayerResultsArgs, "gameId" | "playerId">
  >;
  questionsOrdered?: Resolver<
    Array<ResolversTypes["Question"]>,
    ParentType,
    ContextType
  >;
};

export type QuestionResolvers<
  ContextType = ApolloContext,
  ParentType extends ResolversParentTypes["Question"] = ResolversParentTypes["Question"]
> = {
  answers?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  correctAnswer?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  question?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ApolloContext> = {
  Game?: GameResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  PlayerResult?: PlayerResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
};
